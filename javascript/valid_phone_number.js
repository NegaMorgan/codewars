function validPhoneNumber(phoneNumber){
  return !!phoneNumber.match(/^\(\d{3}\)\s\d{3}-\d{4}$/);
}