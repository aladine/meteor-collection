// main.js
Meteor.startup(function(){

    var t = [
  {
    "nid": 1,
    "product": "Admin",
    "expected_results": "Withdrawal is successful",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations?h=22571f611a14d2fa3f0acd0f62dc0d39",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btn_dialog_withdraw\"]",
    "result_page": "",
    "tid": "AD1"
  },
  {
    "nid": 2,
    "product": "Admin",
    "expected_results": "Withdrawal is successful",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations?h=22571f611a14d2fa3f0acd0f62dc0d39",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btn_dialog_withdraw\"]",
    "result_page": "",
    "tid": "AD2"
  },
  {
    "nid": 3,
    "product": "Admin",
    "expected_results": "Class K1(AM) will be added to LittleLives Demo",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations/add_class?h=4621ac601bb43ce27b2be28936d68d3f",
    "exist": "/html/body/header/div/div/nav/ul/li[4]/a",
    "click_ele": "/html/body/div/div[3]/div/div[2]/a[3]",
    "fields": "//*[@id=\"OrganisationName\"]\n//*[@id=\"OrganisationDescription\"]\n//*[@id=\"school_id\"]\n//*[@id=\"OrganisationLevel\"]\n//*[@id=\"OrganisationSession\"]",
    "submit_btn": "//*[@id=\"btnSubmit\"]",
    "result_page": "https://staging.littlelives.com/admin/organisations?h=4621ac601bb43ce27b2be28936d68d3f",
    "tid": "AD3"
  },
  {
    "nid": 4,
    "product": "Admin",
    "expected_results": "Adding successful ! A welcome email and password will be send to the new user.Username:xxx . Password: [a meaningful password]",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations/add_user?h=22571f611a14d2fa3f0acd0f62dc0d39",
    "exist": "/html/body/div/div[3]/div/div[2]/a[2]",
    "click_ele": "/html/body/div/div/div[2]/h1",
    "fields": "//*[@id=\"userRole\"]\n//*[@id=\"userName\"]\n\n//*[@id=\"name\"]\n//*[@id=\"school_id\"]\n//*[@id=\"UserOrganisationClassId\"]\n//*[@id=\"UserOrganisationBeginDate\"]\n//*[@id=\"UserGenderFemale\"]",
    "submit_btn": "//*[@id=\"btnProceed\"]\n\n//*[@id=\"btnSave\"]",
    "result_page": "https://staging.littlelives.com/admin/organisations",
    "tid": "AD4"
  },
  {
    "nid": 5,
    "product": "Admin",
    "expected_results": "Ooops! LittleLives-Siok Ping is already in LittleLives Demo.",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations/add_user?h=22571f611a14d2fa3f0acd0f62dc0d39",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btnProceed\"]",
    "result_page": "",
    "tid": "AD5"
  },
  {
    "nid": 6,
    "product": "Admin",
    "expected_results": "Ooops! Please enter a valid email address",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations/add_user?h=22571f611a14d2fa3f0acd0f62dc0d39",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//a[@id='btnProceed' and @class='btn_affirm']",
    "result_page": "",
    "tid": "AD6"
  },
  {
    "nid": 7,
    "product": "Admin",
    "expected_results": "",
    "account": "padma@shkindy.com",
    "url": "https://staging.littlelives.com/admin/organisations/add_user?h=22571f611a14d2fa3f0acd0f62dc0d39",
    "exist": "",
    "click_ele": "/html/body/div/div[3]/div/div[2]/a",
    "fields": "//*[@id=\"User1Username\"]\n//*[@id=\"User1Name\"]\n//*[@id=\"User1GenderFemale\"]\n//*[@id=\"User1Class\"]\n/html/body/div[3]/div[2]/button\n/html/body/div[3]/table/tbody/tr[3]/td[5]/a\n/html/body/div[3]/div[2]/button[2]",
    "submit_btn": "//*[@id=\"btnProceed\"]",
    "result_page": "https://staging.littlelives.com/admin/organisations?h=4621ac601bb43ce27b2be28936d68d3f",
    "tid": "AD7"
  },
  {
    "nid": 11,
    "product": "Admin",
    "expected_results": "Once parent's information is edited, \"Edit parent's information successful!\" is displayed. Once SMS is sent, \"Message(SMS) will be sent to parents of students in Amethyst 1 (K2 AM). 9296884\" will be displayed in the Principal/Admin notification.",
    "account": "briyani99@gmail.com",
    "url": "https://staging.littlelives.com/admin/organisations?h=f3f699e561453b25fd379b40a0206f4e",
    "exist": "/html/body/div/div[3]/div[2]/div/section/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/a",
    "click_ele": "",
    "fields": "//*[@id=\"editparentname\"];Albert Leng\n/html/body/div[3]/div[2]/form/div/select;father\n//*[@id=\"editparentemail\"];LENG.ALBERT@GMAIL.COM\n//*[@id=\"editparentmobile\"];93383489",
    "submit_btn": "//*[@id=\"btn_save_parents\"]",
    "result_page": "https://staging.littlelives.com/admin/organisations?h=f3f699e561453b25fd379b40a0206f4e#sms",
    "tid": "AD11"
  },
  {
    "nid": 12,
    "product": "Admin",
    "expected_results": "\"Hi Principal, Student zeee (S9000551J) has joined a new class. Please withdraw him/her from previous class Demo Class 2 第二班 (K1 PM).\nThank you!\" will be displayed.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/admin/organisations",
    "exist": "/html/body/div/div[3]/div/div[2]/a",
    "click_ele": "",
    "fields": "//*[@id=\"User1Username\"]\n/html/body/div/div/div[2]/form/div[2]/table/tbody/tr[2]/td[2]\n/html/body/div/div/div[2]/form/div[2]/table/tbody/tr[2]/td[3]/div;male\n//*[@id=\"User1Class\"];25792\n/html/body/div[3]/div[2]/button",
    "submit_btn": "//*[@id=\"btnProceed\"]",
    "result_page": "https://staging.littlelives.com/admin/organisations",
    "tid": "AD12"
  },
  {
    "nid": 13,
    "product": "Attendance",
    "expected_results": "23 present and 1 absent",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/attendances/roster/26600/20130702",
    "exist": "/html/body/div/div[2]/div[2]/aside/span/a",
    "click_ele": "/html/body/div/div[2]/div[2]/div/div/a/div/div/span",
    "fields": "",
    "submit_btn": "//*[@id=\"btnSave\"]",
    "result_page": "https://staging.littlelives.com/attendances/roster/25800/20130919?h=a39a359c5b6fe0cfe73ab9c7312d239e",
    "tid": "AT13"
  },
  {
    "nid": 14,
    "product": "Attendance",
    "expected_results": "23 present and 1 absent",
    "account": "dotdad@littlelives.com",
    "url": "https://staging.littlelives.com/attendances/roster/26537/20130702",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btnEnhancedSave\"]",
    "result_page": "",
    "tid": "AT14"
  },
  {
    "nid": 15,
    "product": "Attendance",
    "expected_results": "Reasons selected will appear in the remarks column.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/attendances/roster/26537/20130702",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "/html/body/div[2]/div[11]/div/button[2]",
    "result_page": "",
    "tid": "AT15"
  },
  {
    "nid": 16,
    "product": "Attendance",
    "expected_results": "On 5th July all classes will have a day off with the with the reason(bird flu) stated below.",
    "account": "dotdad@littlelives.com",
    "url": "https://staging.littlelives.com/attendances/index/20130705",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "/html/body/div[2]/div[3]/div/button[2]",
    "result_page": "",
    "tid": "AT16"
  },
  {
    "nid": 17,
    "product": "Attendance",
    "expected_results": "On 5th July all classes will resume and attendance needs to be taken.",
    "account": "dotdad@littlelives.com",
    "url": "https://staging.littlelives.com/attendances/index/20130705",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "/html/body/div[2]/div/div[2]/div/div/p/a",
    "result_page": "",
    "tid": "AT17"
  },
  {
    "nid": 18,
    "product": "Login",
    "expected_results": "User will be redirected to the homepage that will display today's to-dos",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/login",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserUsername\"];twinkle@littlelives.com;//*[@id=\"UserPassword\"];littlelives",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "result_page": "https://staging.littlelives.com/notifications?h=b95ad05e09035f3f8eb178adf88555f3",
    "tid": "LO18"
  },
  {
    "nid": 19,
    "product": "Login",
    "expected_results": "User will be brought to the login page again and error message of \"incorrect password, try again\" will be displayed",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/login",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserUsername\"];twinkle@littlelives.com;//*[@id=\"UserPassword\"];123456",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "result_page": "https://staging.littlelives.com/users/login",
    "tid": "LO19"
  },
  {
    "nid": 20,
    "product": "Login",
    "expected_results": "Username will prompt : \"This is a required field\"",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/login",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserUsername\"];;//*[@id=\"UserPassword\"];littlelives",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "result_page": "https://staging.littlelives.com/users/login",
    "tid": "LO20"
  },
  {
    "nid": 21,
    "product": "Login",
    "expected_results": "Username will prompt : \"This is a required field\"",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/login",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserUsername\"];;//*[@id=\"UserPassword\"];",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "result_page": "https://staging.littlelives.com/users/login",
    "tid": "LO21"
  },
  {
    "nid": 22,
    "product": "Login",
    "expected_results": "Invalid username, try again",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/login",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserUsername\"];ll@littlelives.com;//*[@id=\"UserPassword\"];littlelives",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[3]/input",
    "result_page": "https://staging.littlelives.com/users/login",
    "tid": "LO22"
  },
  {
    "nid": 23,
    "product": "Login",
    "expected_results": "User will be redirected to the success page that mention that email has been sent",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/forgetpassword",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[2]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserEmail\"];ray@littlelives.com",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[2]/input",
    "result_page": "https://staging.littlelives.com/users/emailpassword",
    "tid": "LO23"
  },
  {
    "nid": 24,
    "product": "Login",
    "expected_results": "User will be directed to the retrieve password page with an error message \"Sorry, we could not find your email or username associated with any LittleLives account. Please try again with correct email or username, Contact us at feedback@littlelives.com for further assistance.\"",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/forgetpassword",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[2]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserEmail\"];rubbish@littlelives.com",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[2]/input",
    "result_page": "https://staging.littlelives.com/users/forgetpassword",
    "tid": "LO24"
  },
  {
    "nid": 25,
    "product": "Login",
    "expected_results": "User will be directed to the retrieve password page with  message \"Check your email!\nYou will receive an email from us with the new password.\nIf you don't receive an email from us, check your spam filter or contact us at feedback@littlelives.com for further assistance.\"",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/users/forgetpassword",
    "exist": "/html/body/div/div/form/div[2]/fieldset/div[2]/input",
    "click_ele": "",
    "fields": "//*[@id=\"UserEmail\"];dotdad@littlelives.com",
    "submit_btn": "/html/body/div/div/form/div[2]/fieldset/div[2]/input",
    "result_page": "https://staging.littlelives.com/users/emailpassword",
    "tid": "LO25"
  },
  {
    "nid": 26,
    "product": "Notifications",
    "expected_results": "Notification from Chetna Sachdev at 10.11am today \"Hi there! Please note that I have withdrawn student Aksh Venugopal Nair (T1007203J) from class Raindrops (N1 AM).\" will be displayed on the Notifications tab to the admins and the teacher teaching that particular class.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/notifications?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": "NO26"
  },
  {
    "nid": 27,
    "product": "Notifications",
    "expected_results": "Notification from Adaikalasamy Bernadette at 10.54am today \"Attendance for class Cheerfulness on 02-07-2013 has been taken\" will be displayed on the Notifications tab.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/notifications?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": "NO27"
  },
  {
    "nid": 28,
    "product": "Notifications",
    "expected_results": "Notification from Adaikalasamy Bernadette at 10.54am today \"Staff Attendance for St. Hilda's Kindergarten on 02-07-2013 has been taken\" will be displayed on the Notifications tab.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/notifications?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": "NO28"
  },
  {
    "nid": 29,
    "product": "Notifications",
    "expected_results": "Nofication from Principal Sheila Cynthia \" I have transferred student Caleb Teo Shun Kai (T1007449A) from class Rainbow (N1 PM) to class Sunshine (N1 AM).\" and \"I have added student  Caleb Teo Shun Kai to class Diamond 1 (N1 AM) will be displayed",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/notifications?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btn_dialog_transfer\"]",
    "result_page": "",
    "tid": "NO29"
  },
  {
    "nid": 30,
    "product": "Notifications",
    "expected_results": "Principal from both schools will receive this message. \"Hi Principal, Student Au Ze Rui Ethan...has joined a new class. Please withdraw him/her from previous class Brilli 1(K1 AM). Should you have any question, please contact the other centre at 6569-4373. Thankyou!\"",
    "account": "dotdad@littlelives.com",
    "url": "https://staging.littlelives.com/notifications?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btn_dialog_transfer\"]",
    "result_page": "",
    "tid": "NO30"
  },
  {
    "nid": 31,
    "product": "Portfolio",
    "expected_results": "Photos in the album(Office Monday) are being uploaded to the portfolio",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/portfolios?h=2253652703d3c4f6e6d977635c25277e",
    "exist": "/html/body/div/div[5]/div/div[2]",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_photo_dialog\"];25749",
    "submit_btn": "//*[@id=\"btn_photos_upload\"]",
    "result_page": "https://staging.littlelives.com/portfolios/index/25749?t=1379578750389",
    "tid": "PO31"
  },
  {
    "nid": 32,
    "product": "Portfolio",
    "expected_results": "Please choose a video type",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/portfolios?h=2253652703d3c4f6e6d977635c25277e",
    "exist": "//*[@id=\"btn_add_video\"]",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"];26744",
    "submit_btn": "//*[@id=\"btn_video_upload\"]",
    "result_page": "",
    "tid": "PO32"
  },
  {
    "nid": 33,
    "product": "Portfolio",
    "expected_results": "Video in the album(Office Monday) is being uploaded to the portfolio",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/portfolios?h=2253652703d3c4f6e6d977635c25277e",
    "exist": "//*[@id=\"btn_add_video\"]",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"];26744",
    "submit_btn": "//*[@id=\"btn_video_upload\"]",
    "result_page": "https://staging.littlelives.com/portfolios/index/26744?t=1379579768792",
    "tid": "PO33"
  },
  {
    "nid": 34,
    "product": "Portfolio",
    "expected_results": "Evaluation has been saved!",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/portfolios?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "//*[@id=\"btn_evaluation\"]",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btn_save_evaluation\"]",
    "result_page": "https://staging.littlelives.com/portfolios?h=94ca92546784c6ffff5b3fdf5a021dae",
    "tid": "PO34"
  },
  {
    "nid": 35,
    "product": "Portfolio",
    "expected_results": "1. If there are more than 10 moments, you will be able to see loading bar and more moments be loaded after a while;\n2. If you see [Beginning] tag at the end of timeline, you should not be able to view more moment and there should NOT be any loading bar appear.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/portfolios?h=2253652703d3c4f6e6d977635c25277e",
    "exist": "",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"]",
    "submit_btn": "-",
    "result_page": "",
    "tid": "PO35"
  },
  {
    "nid": 36,
    "product": "Portfolio",
    "expected_results": "1. If you are a teacher, you should be able to see moments in YOUR CLASS ONLY.\n2. If you are a principal, you should be able to see moments in YOUR CENTRE ONLY.\n3. If you are a LittleLives Admin, you should be able to see ALL the moments. You should be able to navigate between different centres/classes by clicking the tree.",
    "account": "twinkle@littlelives.com",
    "url": "-",
    "exist": "",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"]",
    "submit_btn": "-",
    "result_page": "",
    "tid": "PO36"
  },
  {
    "nid": 37,
    "product": "Portfolio",
    "expected_results": "",
    "account": "twinkle@littlelives.com",
    "url": "-",
    "exist": "//*[@id=\"delete_link\"]",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"]",
    "submit_btn": "/html/body/div[6]/div[3]/div/button[2]",
    "result_page": "https://staging.littlelives.com/portfolios?h=94ca92546784c6ffff5b3fdf5a021dae",
    "tid": "PO37"
  },
  {
    "nid": 38,
    "product": "Portfolio",
    "expected_results": "",
    "account": "twinkle@littlelives.com",
    "url": "-",
    "exist": "",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"]",
    "submit_btn": "-",
    "result_page": "",
    "tid": "PO38"
  },
  {
    "nid": 39,
    "product": "Portfolio",
    "expected_results": "Album is deleted.",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/portfolios/album/5215a71e-f158-4701-9a97-5001740c3493",
    "exist": "//*[@id=\"delete_link\"]",
    "click_ele": "",
    "fields": "//*[@id=\"select_class_video_dialog\"]",
    "submit_btn": "/html/body/div[5]/div[11]/div/button[2]",
    "result_page": "https://staging.littlelives.com/portfolios/albums/26744",
    "tid": "PO39"
  },
  {
    "nid": 40,
    "product": "Questions",
    "expected_results": "Your answer has been posted",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/questions?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "//*[@id=\"ContentUserId\"]",
    "click_ele": "",
    "fields": "//*[@id=\"ContentContent\"]",
    "submit_btn": "//*[@id=\"btnPostAnswer\"]",
    "result_page": "https://staging.littlelives.com/questions?h=94ca92546784c6ffff5b3fdf5a021dae",
    "tid": "QU40"
  },
  {
    "nid": 41,
    "product": "Questions",
    "expected_results": "Your answer cannot be empty",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/questions?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "//*[@id=\"ContentUserId\"]",
    "click_ele": "",
    "fields": "//*[@id=\"ContentContent\"]",
    "submit_btn": "//*[@id=\"btnPostAnswer\"]",
    "result_page": "",
    "tid": "QU41"
  },
  {
    "nid": 42,
    "product": "To-dos",
    "expected_results": "To-do: \"Hi Teacher! Please remember to take attendance for your class Tea Party 2013 (NN AM)\" should be remove from Today To-dos list once to-do is completed",
    "account": "twinkle@littlelives.com",
    "url": "https://staging.littlelives.com/todos?h=94ca92546784c6ffff5b3fdf5a021dae",
    "exist": "/html/body/div/div/section/a[3]/div/div/p",
    "click_ele": "",
    "fields": "",
    "submit_btn": "//*[@id=\"btnSave\"]",
    "result_page": "https://staging.littlelives.com/attendances/roster/25792/20130918",
    "tid": "TO42"
  },
  {
    "nid": 44,
    "product": "LittleSchools",
    "expected_results": "The result will be filtered by school type",
    "account": "",
    "url": "/schools/",
    "exist": "/div[4][@class='filter-blocks']/p[1]/input[@class='school_type']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 45,
    "product": "LittleSchools",
    "expected_results": "The result will be filtered by  keyword",
    "account": "",
    "url": "/schools/",
    "exist": "//input[@id='query' and @class='query']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 46,
    "product": "LittleSchools",
    "expected_results": "verify the result, based on the search parameter",
    "account": "",
    "url": "/schools/",
    "exist": "//div[@id='filter-ovr-map']/div[@class='filter-container']/div[@class='sortby-filter view-options']/div[@class='btn_options']/a[2][@class='last selected']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 47,
    "product": "LittleSchools",
    "expected_results": "The result should be sorted based on the sorting parameter",
    "account": "",
    "url": "/schools/",
    "exist": "//div[@id='sortBy' and @class='sortby-filter']/div[@class='btn_options']/a[1][@class='first selected']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 48,
    "product": "LittleSchools",
    "expected_results": "The information should be there",
    "account": "",
    "url": "schools/profile/25996/odyssey-fourth-avenue",
    "exist": "]/div[@class='panel default-header']/h2",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 49,
    "product": "LittleSchools",
    "expected_results": "The location in the map and the streetview should change",
    "account": "",
    "url": "schools/profile/25996/odyssey-fourth-avenue",
    "exist": "//a[@id='changeLocation' and @class='small blue-btn button']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 50,
    "product": "LittleSchools",
    "expected_results": "The order of the photos should be changed",
    "account": "",
    "url": "schools/profile/25996/odyssey-fourth-avenue",
    "exist": "//a[@id='sortPhotos']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 51,
    "product": "LittleSchools",
    "expected_results": "The new caption should show in the gallery",
    "account": "",
    "url": "schools/profile/25996/odyssey-fourth-avenue",
    "exist": "//a[@id='title' and @class='photo-caption editable editable-click editable-open']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 52,
    "product": "LittleSchools",
    "expected_results": "The photo shud be deleted",
    "account": "",
    "url": "schools/profile/25996/odyssey-fourth-avenue",
    "exist": "/div[@class='remove-photo ']/span",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 51,
    "product": "Edit Description",
    "expected_results": "The description should be changed",
    "account": "",
    "url": "schools/profile/25996/odyssey-fourth-avenue",
    "exist": "//div[@id='btnEditDesc' and @class='description-edit']",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  },
  {
    "nid": 53,
    "product": "LittleSchools",
    "expected_results": "The page should use the Brighton theme",
    "account": "",
    "url": "schools/profile/26832/brighton-montessori-mountbatten",
    "exist": "/div[@class='panel ku-logo']/h1",
    "click_ele": "",
    "fields": "",
    "submit_btn": "",
    "result_page": "",
    "tid": ""
  }
];
    if(Testcases.find({}).count()==0)
    _.each(t,function(e){
      e.nid = e.nid+"";
      e.script="";
      Testcases.insert(e);
    });

     Meteor.publish('testcases', function() {
       // var fs = Npm.require('fs');
       // console.log(process.cwd());
      // _.each(Testcases.find({}).fetch(),function(e){
      //   // console.log(e.tid);
      //   if(!!e.tid){
      //     var filename = (e.tid).toLowerCase();
      //     console.log(filename );
      //     // fs.writeFile( './files/'+filename+'.js',e.script,function (err) {
      //     //   if (err) throw err;
      //     //   console.log('It\'s saved!');
      //     // });
      //   }
        
      // });
     console.log('There are total '+ Testcases.find({}).count() + ' testcases');
      return Testcases.find({});
    });
    
    Meteor.publish('backup', function() {
      return Backup.find({});
    });

  });