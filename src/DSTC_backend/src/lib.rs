#[macro_use]
extern crate serde;

use ic_cdk::{query, update};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl, Vec as VecStructure,
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



   static DUSTSGROW: RefCell<BTreeMap< u64,Dust,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );

    static USERS: RefCell<BTreeMap< u64,User,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )
    );
    static USER_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))), 0)
            .expect("Cannot create a  user counter")
    );
    static DUST_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3))), 0)
            .expect("Cannot create am Dusts  counter")
    );




}

#[update]
async fn publish_dust(content: String, title: String) -> Result<String, String> {
    let id = DUST_ID_COUNTER.with(|counter| {
        let counter_value = *counter.borrow().get();
        let _ = counter.borrow_mut().set(counter_value + 1);
        counter_value
    });
    let dust = Dust { content, title, id };

    match do_insert_dust(&dust, id) {
        Some(e) => Ok(String::from("Posted succesfully")),
        None => Ok(String::from("Posted succesfully")),
    }
}
#[update]
async fn delete_all_dusts() -> Result<String, String> {
    DUSTSGROW.with(|dusts| {
        let mut dusts = dusts.borrow_mut();
        let keys: Vec<u64> = dusts.iter().map(|(k, _)| k).collect();
        for key in keys {
            dusts.remove(&key);
        }
    });
    Ok(String::from("All dusts deleted successfully"))
}

fn do_insert_dust(dust: &Dust, id: u64) -> Option<Dust> {
    DUSTSGROW.with(|service| service.borrow_mut().insert(id, dust.clone()))
}

#[query]
async fn get_dusts() -> Vec<(u64, Dust)> {
    let dusts: Vec<_> = DUSTSGROW.with(|storage| storage.borrow().iter().collect());

    dusts
}

#[query]
async fn get_single_dust(id: u64) -> Result<Dust, String> {
    match_get_dust(&id).ok_or_else(|| format!("Dust with id={} not found", id))
}

fn match_get_dust(id: &u64) -> Option<Dust> {
    DUSTSGROW.with(|service| service.borrow().get(id))
}

#[derive(candid::CandidType, Deserialize, Serialize, Debug)]
enum Error {
    NotFound { msg: String },
}

ic_cdk::export_candid!();
