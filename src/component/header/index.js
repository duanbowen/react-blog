import React, { Component } from 'react';
import style from './style.less';
class Header extends Component {
  state = {
    value: ''
  }
  onSearch = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <header>
        <div className={style['container']}>
          <a className={style['logo']} href="/">
            <img
              src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
              alt="掘金"
            />
          </a>
          <nav>
            <ul>
              <li className="active">滚动·文字</li>
              <li>
                <p className={'active ' + style['search']}>
                  <input
                    value={this.state.value}
                    onChange={this.onSearch}
                    placeholder="搜索"
                  />
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Qjk3RUIxMEEtOEYzNC00QUI1LUFCQUYtNDFEOTMzNzQxRUQwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLpppbpobUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlr7zoiKrmoI/mkJzntKLmoYYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTAuMDAwMDAwLCAtMTkuMDAwMDAwKSIgZmlsbD0iI0MzQ0NENSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkwLjAwMDAwMCwgMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuOTg2MTI2LDE0LjQwMDMzOTUgTDE2LjI5Mjg5MzIsMTcuNzA3MTA2OCBDMTYuNjgzNDE3NSwxOC4wOTc2MzExIDE3LjMxNjU4MjUsMTguMDk3NjMxMSAxNy43MDcxMDY4LDE3LjcwNzEwNjggQzE4LjA5NzYzMTEsMTcuMzE2NTgyNSAxOC4wOTc2MzExLDE2LjY4MzQxNzUgMTcuNzA3MTA2OCwxNi4yOTI4OTMyIEwxNC40MDAzMzk1LDEyLjk4NjEyNiBDMTUuOTYwMzg4MSwxMC43NTczMjk4IDE1Ljc0NTI0MDIsNy42NjQwMTk4MyAxMy43NTQ4OTU5LDUuNjczNjc1NTQgQzExLjUyMzMyODUsMy40NDIxMDgxNSA3LjkwNTI0MjkyLDMuNDQyMTA4MTUgNS42NzM2NzU1NCw1LjY3MzY3NTU0IEMzLjQ0MjEwODE1LDcuOTA1MjQyOTIgMy40NDIxMDgxNSwxMS41MjMzMjg1IDUuNjczNjc1NTQsMTMuNzU0ODk1OSBDNy42NjQwMTk4MywxNS43NDUyNDAyIDEwLjc1NzMyOTgsMTUuOTYwMzg4MSAxMi45ODYxMjYsMTQuNDAwMzM5NSBaIE03LjA4Nzg4OTEsMTIuMzQwNjgyMyBDNS42MzczNzAzLDEwLjg5MDE2MzUgNS42MzczNzAzLDguNTM4NDA3OSA3LjA4Nzg4OTEsNy4wODc4ODkxIEM4LjUzODQwNzksNS42MzczNzAzIDEwLjg5MDE2MzUsNS42MzczNzAzIDEyLjM0MDY4MjMsNy4wODc4ODkxIEMxMy43OTEyMDExLDguNTM4NDA3OSAxMy43OTEyMDExLDEwLjg5MDE2MzUgMTIuMzQwNjgyMywxMi4zNDA2ODIzIEMxMC44OTAxNjM1LDEzLjc5MTIwMTEgOC41Mzg0MDc5LDEzLjc5MTIwMTEgNy4wODc4ODkxLDEyLjM0MDY4MjMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="搜索" ></img>
                </p>
              </li>
              <li>简历Icon</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;