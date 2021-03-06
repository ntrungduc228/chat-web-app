const transValidationVi = {
  email_incorrect: "Email phải có dạng example@gmail.com!",
  gender_incorrect: "Bede phải hông tar??",
  password_incorrect:
    "Mật khẩu phải gồm 6 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.",
  confirm_password_incorrect: "Nhập lại mật khẩu chưa chính xác!",
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

const transErrorsVi = {
  account_login_incorrect: "Tài khoản hoặc mật khẩu không chính xác",
  email_not_found: "Không tìm thấy email, vui lòng kiểm tra lại thông tin",
  account_in_use: "User này đã được sử dụng",
  account_removed:
    "Tài khoản này đã bị dỡ khỏi hệ thống, nếu cho rằng đây là hiêu lầm, vui lòng liên hệ với bộ phần hỗ  trợ của chúng tôi.",
  account_not_active:
    "Email đã đăng ký nhưng chưa được Active tài khoản, vui lòng kiểm tra email hoặc liên hệ với bộ phần hỗ  trợ của chúng tôi.",
  account_undefined: "Tài khoản này không tồn tại.",
  token_undefined: "Token không tồn tại!",
  login_failed: "Sai tài khoản hoặc mật khẩu!",
  server_error:
    "Có lỗi phía server, liên hệ với bộ phận hỗ  trợ để báo cáo lỗi này, xin cảm ơn.",
};

const transSuccessVi = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail} đã được tạo, kiểm tra email Active tài khoản trước khi đăng nhập, cảm ơn</strong>`;
  },
  account_actived:
    "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập ứng dụng.",
  loginSuccess: (username) => {
    return `Xin chào ${username}, chúc bạn một ngày tốt lành.`;
  },
  send_reset_password_success:
    "Gửi mail reset mật khẩu thành công, vui lòng kiểm tra mail",
  user_password_updated: "Cập nhật mật khẩu thành công.",
};

const transMailVi = {
  send_failed:
    "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi.",
};

module.exports = {
  transValidationVi,
  transErrorsVi,
  transSuccessVi,
  transMailVi,
};
