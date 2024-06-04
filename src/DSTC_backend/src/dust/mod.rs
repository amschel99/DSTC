use candid::{Decode, Encode, Principal};
use ic_stable_structures::{BoundedStorable, Storable};
use std::borrow::Cow;

#[derive(candid::CandidType, Clone, Serialize, Deserialize)]
pub struct Dust {
    pub title: String,
    pub content: String,

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
    const MAX_SIZE: u32 =102400;
    const IS_FIXED_SIZE: bool = false;
}
