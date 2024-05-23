#[macro_use]
extern crate serde;


use ic_cdk::{query, update};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl,Vec as VecStructure
};

use std::cell::RefCell;
mod dust;
mod user;
use dust::Dust;
use user::User;

type Memory = VirtualMemory<DefaultMemoryImpl>;

type IdCell = Cell<u64, Memory>;

thread_local! {

    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));



 static DUSTSGROW: RefCell<VecStructure<Dust, Memory>> = RefCell::new(
   
        VecStructure::new(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),).unwrap()
    );

    static USERS: RefCell<BTreeMap< u64,User,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );
    static USER_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
            .expect("Cannot create a  user counter")
    );
    static DUST_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
            .expect("Cannot create am Dusts  counter")
    );




}


#[update]
async fn publish_dust(content:Vec<String>, title:String)->Option<Dust>{
       let id = DUST_ID_COUNTER.with(|counter| {
        let counter_value = *counter.borrow().get();
        let _ = counter.borrow_mut().set(counter_value + 1);
        counter_value
    });
    let dust= Dust{
        content,
        title,
        id,
        publisher:ic_cdk::caller(),
        votes:None
    };
  
 match do_insert_dust(&dust){
    Ok(_) => Some(dust),
    Err(e)=>{
        println!("Error: {}",e);
        None
    }
 }



}
 
fn do_insert_dust(dust: &Dust) ->Result<(), ic_stable_structures::GrowFailed>{
    DUSTSGROW.with(|service| service.borrow_mut().push( dust))
}


#[query]
async fn get_dusts()->Vec<Dust>{
      let dusts: Vec<_> = DUSTSGROW.with(|storage| storage.borrow().iter().collect());
      
    dusts
}

#[query]
async fn get_single_dust(id:u64)->Result<Dust, String>{
       match_get_dust(&id).ok_or_else(|| format!("Dust with id={} not found", id)) 

}

fn match_get_dust(id: &u64) -> Option<Dust> {
    DUSTSGROW.with(|service| service.borrow().get(*id))
}

#[derive(candid::CandidType, Deserialize, Serialize, Debug)]
enum Error {
    NotFound { msg: String },
}



ic_cdk::export_candid!();
