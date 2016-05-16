<!-- Name: André Levy | Student Number: 300 826 634 -->
function validateform() {

    var Fname = document.getElementById(Fname);
    var Lname = document.getElementById(Lname);

    var postal = document.getElementById(postal);
    var province = document.getElementById(province);
    var confirm = document.getElementById(postconfirm);
    var password = document.getElementById(postal);
    var age = document.getElementById(age);

    var email = document.getElementById(email);
    var alertmessage = "";
    var alertmessagewrong = "";

    if (Fname == null || Fname == "") {
        alertmessage = "\n First Name can not be left blank";

        rightvalue = false;
    }
    if (Lname == null || Lname == "") {
        alertmessage += "\nLast Name can not be left blank";
        rightvalue = false;
    }
    if (address == null || address == "") {
        alertmessage += ("\nAddress can not be left blank ");
        rightvalue = false;
    }
    if (city == null || city == "") {
        alertmessage += ("\nCity can not be left blank");
        rightvalue = false;
    }
    if (postal == null || postal == "") {
        alertmessage += ("\nPostal Code can not be left blank ");
        rightvalue = false;

    }
    else if (!(/([A-Za-z]{1}[0-9]{1}){3}$/).test(postal)) {
        alertmessagewrong += ("\nThe postal code has to be in the a0a0a0 format ");
        rightvalue = false;
    }

    if (province == null || province == "") {
        alertmessage += ("\nProvince can not be left blank");
        rightvalue = false;
    }
    else if (!(province === "QC" || province === "ON" || province === "MN" || province === "SK" || province === "AB" || province === "BC")) {
        alertmessagewrong += ("\nProvince is one of QC, ON, MN, SK, AB, BC.");
        rightvalue = false;
    }
    if (age == null || age == "") {
        alertmessage += ("\nAge can not be left blank");
        rightvalue = false;
    }
    else if (age < 18) {
        alertmessagewrong += ("\nAge has to be at least 18 yrs. old.");
        rightvalue = false;
    }
    if (password == null || password == "") {
        alertmessage += ("\nPAssword can not be left blank");
        rightvalue = false;
    }
    else if (!(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/).test(pass)) {
        alertmessagewrong += ("\nEmail field must contain the @ and . characters");
        rightvalue = false;
    }
    if (confirm == null || confirm == "") {
        alertmessage += ("\nConfirm password");
        rightvalue = false;
    }
    else if (confirm != pass) {
        alertmessagewrong += ("\nPasswords do not match");
        rightvalue = false;
    }
    if (email == null || email == "") {
        alertmessage += ("email can not be left blank");
        rightvalue = false;
    }
    else if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/).test(email)) {
        alertmessagewrong += ("\nEmail field must contain the @ and . characters");
        rightvalue = false;
    }



    if (rightvalue == false) {
        alert(alertmessage);
        alert(alertmessagewrong);
    }
    else {
        alert("Thanks for registering with our website, your customer record was created successfully.");


    }
}