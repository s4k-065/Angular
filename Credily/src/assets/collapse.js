function radio1() {
    document.getElementById("collapse1").style.cssText = 'display:block';
    document.getElementById("collapse2").style.cssText = 'display:none';
    document.getElementById("collapse3").style.cssText = 'display:none';

  }
  function radio2() {
    document.getElementById("collapse2").style.cssText = 'display:block';
    document.getElementById("collapse1").style.cssText = 'display:none';
    document.getElementById("collapse3").style.cssText = 'display:none';

  }
  function radio3() {
    document.getElementById("collapse3").style.cssText = 'display:block';
    document.getElementById("collapse2").style.cssText = 'display:none';
    document.getElementById("collapse1").style.cssText = 'display:none';

  }
  // function npiCheck() {
  //   var npi = document.getElementById("npi");
  //   var npivalue = npi.value;
  //   if (npivalue.length != 10)
  //   document.getElementById("validationError").innerHTML = "Please enter valid NPI";
  // }
  function yes() {
    document.getElementById("yescollapse").style.cssText = 'display:block';
    document.getElementById("nocollapse").style.cssText = 'display:none';
    document.getElementById("Icollapse").style.cssText = 'display:none';
    document.getElementById("Someonecollapse").style.cssText = 'display:none';

}
function no() {
    document.getElementById("nocollapse").style.cssText = 'display:block';
    document.getElementById("yescollapse").style.cssText = 'display:none';
    document.getElementById("Icollapse").style.cssText = 'display:none';
    document.getElementById("Someonecollapse").style.cssText = 'display:none';

}
function i() {
    document.getElementById("Icollapse").style.cssText = 'display:block';
    document.getElementById("Someonecollapse").style.cssText = 'display:none';
}
function someone() {
    document.getElementById("Someonecollapse").style.cssText = 'display:block';
    document.getElementById("Icollapse").style.cssText = 'display:none';
}