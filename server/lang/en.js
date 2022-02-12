const transValidationEn = {
  email_incorrect: "The input is not valid E-mail!",
  gender_incorrect: "What is your gender ???",
  password_incorrect:
    "Password must contains at least 6 chars, uppercase letter, lowercase letter, number and, special chars!",
  confirm_password_incorrect: "The password confirmation does not match.!",
  update_username:
    "Username giới hạn trong khoảng 3-17 ký tự, và không được có ký tự đặc biệt.",
  update_gender: "Có phải bạn là giới tính thứ 3?",
  update_address: "Địa chỉ giới hạn trong khoảng 3-30 ký tự.",
  update_phone:
    "Số điện thoại Việt Nam bắt đầu bằng số 0, giới hạn từ 10-11 ký tự.",
  keyword_find_user:
    "Lỗi từ khóa tìm kiếm, chỉ cho phép chữ cái, số hay khoảng trống.",
  message_text_emoji_incorrect:
    "Tin nhắn không hợp lệ, đảm bảo tối thiểu 1 ký tự, tôi đa 400 ký tự.",
  add_new_group_users_incorrect:
    "Vui lòng chọn bạn bè vào nhóm, tối thiểu 2 người.",
  add_new_group_name_incorrect:
    "Vui lòng nhập tên cuộc trò chuyện, giới hạn 5-40 ký tự và không chứa ký tự đặc biệt.",
};

const transErrorsEn = {
  account_login_incorrect: "Incorrect email or password!",
  email_not_found: "Email not found!",
  account_in_use: "User already exists!",
  account_removed:
    "Tài khoản này đã bị dỡ khỏi hệ thống, nếu cho rằng đây là hiêu lầm, vui lòng liên hệ với bộ phần hỗ  trợ của chúng tôi.",
  account_not_active:
    "Account is exists but hasn't been activated yet. Please check your email or contact with our support Team. Thanks!",
  account_undefined: "Tài khoản này không tồn tại.",
  token_undefined: "Token is not exists!",
  login_failed: "Incorrect email or password!",
  server_error: "Server error - please contact your administrator, thank you!",
};

const transSuccessEn = {
  userCreated: (userEmail) => {
    return `Account ${userEmail} has been created. Please click the activation link we sent to your email, thanks!`;
  },
  account_actived: "Account actived successfully!",
  loginSuccess: (username) => {
    return ` Welcome ${username}. Have a nice day!`;
  },
  send_reset_password_success:
    "Gửi mail reset mật khẩu thành công, vui lòng kiểm tra mail",
  user_password_updated: "Cập nhật mật khẩu thành công.",
};

const transMailEn = {
  send_failed:
    "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi.",
};

module.exports = {
  transValidationEn,
  transErrorsEn,
  transSuccessEn,
  transMailEn,
};
