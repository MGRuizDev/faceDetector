import React from 'react';
//import './Signin.css';

const Signin = ({ signinChange }) => {
  return (
  <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center">
    <main className="pa4 black-80">
      <form className="measure">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
          <div class="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" type="email" name="email-address"  id="email-address" ></input>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" for="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" type="password" name="password"  id="password"></input>
          </div>
          <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me </label>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit" value="Sign in" onClick={() => signinChange('home') }></input>
        </div>
        <div class="lh-copy mt3">
          <p onClick={() => signinChange('register')} class="f6 link dim black db pointer">Sign up</p>
        </div>
      </form>
    </main>
   </article>
  );
}

export default Signin;


