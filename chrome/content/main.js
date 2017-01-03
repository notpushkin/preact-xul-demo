'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx h */

var _preact = preact,
    Component = _preact.Component,
    h = _preact.h,
    render = _preact.render;

var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodoList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call.apply(_ref, [this].concat(args))), _this), _this.state = { todos: [], text: '' }, _this.setText = function (e) {
      _this.setState({ text: e.target.value });
    }, _this.addTodo = function () {
      var _this$state = _this.state,
          todos = _this$state.todos,
          text = _this$state.text;

      todos = todos.concat({ text: text });
      _this.setState({ todos: todos, text: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render(_ref2, _ref3) {
      var todos = _ref3.todos,
          text = _ref3.text;

      _objectDestructuringEmpty(_ref2);

      return h(
        'vbox',
        null,
        h(
          'hbox',
          null,
          h('textbox', { value: text, onInput: this.setText }),
          h('button', { label: 'Add', onClick: this.addTodo })
        ),
        h(
          'listbox',
          null,
          todos.map(function (todo) {
            return h('listitem', { label: todo.text });
          })
        )
      );
    }
  }]);

  return TodoList;
}(Component);

render(h(TodoList, null), document.getElementById("appRoot"));
