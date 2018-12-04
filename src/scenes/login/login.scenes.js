import React from 'react';
import { TextInput, TextInputGroup } from 'components/input';
import { Button } from 'components/button';

export class Login extends React.PureComponent {
  render () {
    return (
      <div>
        <h2 className="section-title color--blue">Sign in</h2>
        <form id="login-form" name="login-form" action="/" method="POST" className="entry-form form-default">
          <div className="form-default__main">
            <div className="form-row">
              <TextInput
                label={'Login'}
                placeholder={'Login'}
              />
            </div>
            <div className="form-row">
              <TextInputGroup
                label={'Password'}
                type={'password'}
                groupRender={
                  <div className="input-group-append">
                    <div className="input-group-text">Forgot password?</div>
                  </div>
                }
              />
            </div>
          </div>
          <div className="form-default__footer">
            <div className="form-row">
              <Button label={'Sign in'}/>
            </div>
            <div className="form-row">
              <div className="text-line text-center m-auto">Not a member yet? <a href="#">Register</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
