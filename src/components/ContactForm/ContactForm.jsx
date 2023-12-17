import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  formSubmit = e => {
    e.preventDefault();

    const userName = e.currentTarget.elements.name.value;
    const userNumber = e.currentTarget.elements.number.value;

    const formData = {
      userName,
      userNumber,
    };
    // console.log(formData);
    this.props.addNewName(formData);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.formSubmit}>
        <div className={css.divWrapper}>
          <label htmlFor="" className={css.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={css.input}
            id=""
            placeholder=""
            required
          />
        </div>
        <div className={css.divWrapper}>
          <label htmlFor="" className={css.label}>
            Number
          </label>
          <input
            type="number"
            name="number"
            className={css.input}
            id=""
            placeholder=""
            required
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
