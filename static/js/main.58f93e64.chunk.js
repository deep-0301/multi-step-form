(this["webpackJsonpmulti-step-form"]=this["webpackJsonpmulti-step-form"]||[]).push([[0],{204:function(e,t,a){},205:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(12),i=a.n(s),r=(a(204),a(205),a(196)),o=a(24),j=a(25),l=a(27),u=a(26),b=a(13),x=a(197),h=a(49),O=a.n(h),p=a(10),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange,n=e.continues;return Object(p.jsx)(x.MuiThemeProvider,{children:Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(b.a,{title:"Enter User Details",iconClassNameLeft:!0}),Object(p.jsx)(b.d,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),Object(p.jsx)("br",{}),Object(p.jsx)(b.d,{hintText:"Enter Your last Name",floatingLabelText:"last Name",onChange:a("lastName"),defaultValue:t.lastName}),Object(p.jsx)("br",{}),Object(p.jsx)(b.d,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{onClick:n,fontSize:"large",className:"nextMenu"})]})})}}]),a}(n.Component),f=a(30),d=a.n(f),g=a(73),v=a.n(g),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange,n=e.back,s=e.continues;return Object(p.jsx)(d.a,{children:Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(b.a,{title:"Enter Personal Details",iconClassNameLeft:!0}),Object(p.jsx)(b.d,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),Object(p.jsx)("br",{}),Object(p.jsx)(b.d,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),Object(p.jsx)("br",{}),Object(p.jsx)(b.d,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),Object(p.jsx)("br",{}),Object(p.jsx)(v.a,{onClick:n,fontSize:"large",className:"nextMenu"}),Object(p.jsx)(O.a,{onClick:s,fontSize:"large",className:"nextMenu"})]})})}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=t.firstName,n=t.lastName,s=t.email,i=t.occupation,r=t.city,o=t.bio,j=e.continues,l=e.back;return Object(p.jsx)(d.a,{children:Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(b.a,{title:"Confirm User Details",iconClassNameLeft:!0}),Object(p.jsxs)(b.b,{children:[Object(p.jsx)(b.c,{primaryText:"First Name",secondaryText:a}),Object(p.jsx)(b.c,{primaryText:"Last Name",secondaryText:n}),Object(p.jsx)(b.c,{primaryText:"Email",secondaryText:s}),Object(p.jsx)(b.c,{primaryText:"Occupation",secondaryText:i}),Object(p.jsx)(b.c,{primaryText:"City",secondaryText:r}),Object(p.jsx)(b.c,{primaryText:"Bio",secondaryText:o})]}),Object(p.jsx)("br",{}),Object(p.jsx)(v.a,{onClick:l,fontSize:"large",className:"nextMenu"}),Object(p.jsx)(O.a,{onClick:j,fontSize:"large",className:"nextMenu"})]})})}}]),a}(n.Component),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(p.jsx)(d.a,{children:Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(b.a,{title:"Success",iconClassNameLeft:!0}),Object(p.jsxs)("div",{className:"success",children:[Object(p.jsx)("h2",{children:"Thank You For your Registration"}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"You will get an email with further instructions for Login"})]})]})})}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},e.continues=function(t){t.preventDefault();var a=e.state.step;e.setState({step:a+1})},e.back=function(t){t.preventDefault();var a=e.state.step;e.setState({step:a-1})},e.handleChange=function(t){return function(a){e.setState(Object(r.a)({},t,a.target.value))}},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return Object(p.jsx)(m,{nextStep:this.nextStep,handleChange:this.handleChange,values:a,continues:this.continues});case 2:return Object(p.jsx)(y,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a,back:this.back,continues:this.continues});case 3:return Object(p.jsx)(C,{nextStep:this.nextStep,prevStep:this.prevStep,values:a,back:this.back,continues:this.continues});case 4:return Object(p.jsx)(N,{})}}}]),a}(n.Component);var k=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"userform",children:Object(p.jsx)(T,{})})})};i.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[398,1,2]]]);
//# sourceMappingURL=main.58f93e64.chunk.js.map