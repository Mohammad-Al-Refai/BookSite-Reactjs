(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(1),a=n.n(o),i=n(8),c=n.n(i),l=(n(14),n(2)),r=n(3),u=n(5),b=n(4),h=(n(6),n.p+"static/media/books.47bd58ac.svg"),j=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)("img",{src:h,className:"App-logo",alt:"logo"})})}}]),n}(a.a.Component),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"book",children:[Object(s.jsx)("div",{className:"face",children:Object(s.jsxs)("div",{className:"details",children:[Object(s.jsx)("p",{style:{fontSize:"20px"},children:this.props.title}),Object(s.jsx)("p",{style:{fontSize:"14px"},children:this.props.subtitle}),Object(s.jsx)("button",{onClick:function(){window.open(t.props.readlink)},children:"Read"})]})}),Object(s.jsx)("img",{src:this.props.image})]})}}]),n}(a.a.Component),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(s.jsx)("button",{className:"tag",onClick:this.props.onClick,children:this.props.value})}}]),n}(a.a.Component),d=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsx)("div",{className:"search",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{placeholder:"type words to search",onChange:function(e){t.setState({value:e.target.value}),t.props.value(e.target.value),console.log(e.target.value)}}),Object(s.jsx)("button",{onClick:this.props.onSearch,children:"search"})]})})}}]),n}(a.a.Component),k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"loading_parent",style:{display:this.props.show},children:Object(s.jsx)("div",{className:"loading",children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"c"})})})})}}]),n}(a.a.Component),m=function t(e,n,s,o){Object(l.a)(this,t),this.title=null,this.subtitle=null,this.image=null,this.readlink=null,this.title=e,this.subtitle=n,this.image=s,this.readlink=o},f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={search_value:"",loading:"none",books:[]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(k,{show:this.state.loading}),Object(s.jsx)(j,{}),Object(s.jsx)(d,{value:function(e){t.setState({search_value:e})},onSearch:function(){t.state.books=[],t.setState({books:t.state.books});var e=t.state.search_value;""!==e&&(t.setState({loading:"block"}),fetch("https://www.googleapis.com/books/v1/volumes?q="+e).then((function(t){return t.json()})).then((function(e){t.setState({loading:"none"}),e.items.map((function(e){var n=e.volumeInfo,s=n.imageLinks.smallThumbnail,o=n.title,a=n.previewLink,i=void 0==n.subtitle?"no subtitle":n.subtitle;t.state.books.push(new m(o,i,s,a))})),t.setState({books:t.state.books}),(new AbortController).abort()})))}}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"tags",children:[Object(s.jsx)(v,{value:"JavaScript",onClick:function(){t.state.books=[],t.setState({books:t.state.books}),t.setState({loading:"block"});fetch("https://www.googleapis.com/books/v1/volumes?q=JavaScript").then((function(t){return t.json()})).then((function(e){t.setState({loading:"none"}),e.items.map((function(e){var n=e.volumeInfo,s=n.imageLinks.smallThumbnail,o=n.title,a=n.previewLink,i=void 0==n.subtitle?"no subtitle":n.subtitle;t.state.books.push(new m(o,i,s,a))})),t.setState({books:t.state.books})}))}}),Object(s.jsx)(v,{value:"Flutter",onClick:function(){t.state.books=[],t.setState({books:t.state.books}),t.setState({loading:"block"});fetch("https://www.googleapis.com/books/v1/volumes?q=Flutter").then((function(t){return t.json()})).then((function(e){t.setState({loading:"none"}),e.items.map((function(e){var n=e.volumeInfo,s=n.imageLinks.smallThumbnail,o=n.title,a=n.previewLink,i=void 0==n.subtitle?"no subtitle":n.subtitle;t.state.books.push(new m(o,i,s,a))})),t.setState({books:t.state.books})}))}}),Object(s.jsx)(v,{value:"OOP",onClick:function(){t.state.books=[],t.setState({books:t.state.books}),t.setState({loading:"block"});fetch("https://www.googleapis.com/books/v1/volumes?q=OOP").then((function(t){return t.json()})).then((function(e){t.setState({loading:"none"}),e.items.map((function(e){var n=e.volumeInfo,s=n.imageLinks.smallThumbnail,o=n.title,a=n.previewLink,i=void 0==n.subtitle?"no subtitle":n.subtitle;t.state.books.push(new m(o,i,s,a))})),t.setState({books:t.state.books})}))}}),Object(s.jsx)(v,{value:"Python",onClick:function(){t.state.books=[],t.setState({books:t.state.books}),t.setState({loading:"block"});fetch("https://www.googleapis.com/books/v1/volumes?q=Python").then((function(t){return t.json()})).then((function(e){t.setState({loading:"none"}),e.items.map((function(e){var n=e.volumeInfo,s=n.imageLinks.smallThumbnail,o=n.title,a=n.previewLink,i=void 0==n.subtitle?"no subtitle":n.subtitle;t.state.books.push(new m(o,i,s,a))})),t.setState({books:t.state.books})}))}})]}),Object(s.jsx)("div",{className:"list",children:this.state.books.map((function(t){return Object(s.jsx)(p,{image:t.image,title:t.title,subtitle:t.subtitle,readlink:t.readlink})}))})]})]})}}]),n}(a.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,s=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),s(t),o(t),a(t),i(t)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),O()},6:function(t,e,n){}},[[15,1,2]]]);