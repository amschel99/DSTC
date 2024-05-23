use candid::{Decode, Encode, Principal};
use ic_stable_structures::{BoundedStorable, Storable};
use std::borrow::Cow;




#[derive(candid::CandidType, Clone, Serialize, Deserialize)]

pub struct VOTE {
    pub count: u64,
    pub principals: Option<Vec<Principal>>,
}

#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct Dust {
    pub publisher: Principal,
    pub title:String,
    pub content: Vec<String>,
    pub votes: Option<VOTE>,
    pub id: u64,
}
impl Dust {}
impl Storable for Dust {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Dust {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}
impl Storable for VOTE {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for VOTE {
    const MAX_SIZE: u32 = 1024;
    const IS_FIXED_SIZE: bool = false;
}


