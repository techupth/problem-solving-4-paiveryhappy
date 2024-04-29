function defangIPaddr(ipAddress) {
  let newIpAddress = "";
  for (let i = 0; i < ipAddress.length; i++) {
    if (ipAddress[i] === ".") {
      newIpAddress += "[.]";
    } else {
      newIpAddress += ipAddress[i];
    }
  }
  console.log(newIpAddress);
}

defangIPaddr("1.1.1.1");
defangIPaddr("255.100.50.0");
