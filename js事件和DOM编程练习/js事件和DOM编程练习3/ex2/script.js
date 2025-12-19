// 获取表单节点（元素）
// 获取id为form的节点（html标签、DOM节点)
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

console.log(container);

// 显示错误提示信息
function showError(input, message) {
  // 获取input节点的父节点formControl
  const formControl = input.parentElement;
  // 设置formControl的class属性值
  formControl.className = "form-control error";
  // 在formControl中查找small节点
  const small = formControl.querySelector("small");
  // 将small节点内部的html文本内容设为message
  small.innerText = message;
}

// 设置校验成功时的表单样式
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// 校验邮箱地址是否合法
function checkEmail(input) {
  // 定义正则表达式
  const re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  // 使用正则表达式re校验input节点的value属性值
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "邮箱地址不合法");
  }
}

// 校验必填字段
function checkRequired(inputArr) {
  console.log(inputArr);
  let notEmpty = true;
  // 循环遍历数组inputArr，forEach方法的参数是一个函数，
  // 每次循环执行这个函数，并把一个数组元素的值赋给函数参数input
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} 是必填字段`);
      notEmpty = false;
    } else {
      showSuccess(input);
    }
  });
  return notEmpty;
}

// 校验字符串长度
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} 不少于 ${min} 个字符`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} 不多于 ${max} 个字符`);
  } else {
    showSuccess(input);
  }
}

// 校验两次密码一致
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "两次输入的密码不一致");
  }
}

// 获取字段名
function getFieldName(input) {
  // 返回input节点的前一个兄弟节点的文本内容
  return input.previousElementSibling.innerText;
}

// 事件监听，表单点击提交按钮时触发
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkRequired([username, email, password, password2])) {
    // 用户名的长度在[3,15]之间
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }
});

// 使用表单元素的focus和blur事件处理方式
// 在每个表单元素失去焦点时校验表单内容
// 在每个表单元素获取焦点时检查：如果有错误提示信息则清除表单内容及错误提示信息
// 为每个表单元素添加 focus 和 blur 事件监听
[username, email, password, password2].forEach(input => {

  input.addEventListener("blur", function () {
    if (this === username) {
      checkRequired(this);
      checkLength(this, 3, 15);
    } else if (this === email) {
      checkRequired(this);
      checkEmail(this);
    } else if (this === password) {
      checkRequired(this);
      checkLength(this, 6, 25);
    } else if (this === password2) {
      checkRequired(this);
      if (password.value.trim() !== "") {
        checkPasswordsMatch(password, this);
      }
    }
  });

  input.addEventListener("focus", function () {
    const formControl = this.parentElement;
    if (formControl.classList.contains("error")) {
      formControl.className = "form-control";
      this.value = "";
    }
  });
});
