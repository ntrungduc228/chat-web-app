let getBodyHTMLEmail = (data) => {
  return `
      <h2>Bạn nhận được email này vì đăng ký ứng dụng Awesome Chat.</h2>
      <h3>Vui lòng click vào liên kết bên dưới để xác nhận tài khoản.</h3>
      <h3><a href="${data.linkVerify}" target="blank">${data.linkVerify}</a></h3>
      <h4>Nếu tin rằng đây là nhầm lẫn, hãy bỏ qua nó. Cảm ơn.</h4>
  `;
};

module.exports = { getBodyHTMLEmail };
