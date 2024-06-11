'use client';
import React, { FormEvent } from 'react';
import styles from '../styles/contact.module.scss';
import AppButton from './AppButton';
import { useFormspark } from '@formspark/use-formspark';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

import { BsCalendarDate as CalendarIcon } from 'react-icons/bs';
import { E164Number } from 'libphonenumber-js/core';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import webContent from '../../../public/webdata/webcontent.json';
import dayjs from 'dayjs';
const ContactForm = () => {
  const [contactFormData, setContactFormData] = React.useState<Record<string, any>>({
    name: '',
    email: '',
    phone: null,
    activity: '',
    message: '',
    dateOfVisitStart: new Date(),
    // dateOfVisitEnd: new Date(),
    numOfPeople: undefined,
    numOfChildren: undefined,
  });

  const [errors, setErrors] = React.useState<string[]>([]);

  const formKey = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID;

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const shorthandCheck = checkParams === UserLanguage.hr;

  React.useEffect(() => {
    const validate = () => {
      setErrors([]);
      if (!contactFormData.name)
        setErrors((prev) => [...prev, shorthandCheck ? 'Ime je obavezno' : 'Name is required']);
      if (!contactFormData.email)
        setErrors((prev) => [...prev, shorthandCheck ? 'Email je obavezan' : 'Email is required']);
      else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) setErrors((prev) => [...prev, 'Email is invalid']);
      if (!contactFormData.phone)
        setErrors((prev) => [...prev, shorthandCheck ? 'Broj telefona je obavezan' : 'Phone number is required']);
      else if (!isValidPhoneNumber(contactFormData.phone)) setErrors((prev) => [...prev, 'Invalid phone number']);
      if (!contactFormData.activity)
        setErrors((prev) => [...prev, shorthandCheck ? 'Aktivnost je obavezna' : 'Activity is required']);
      if (!contactFormData.message)
        setErrors((prev) => [...prev, shorthandCheck ? 'Poruka je obavezna' : 'Message is required']);
      if (!contactFormData.dateOfVisitStart)
        setErrors((prev) => [...prev, shorthandCheck ? 'Datum posjete je obavezan' : 'Date of visit is required']);
      if (contactFormData.numOfPeople === undefined)
        setErrors((prev) => [...prev, shorthandCheck ? 'Broj osoba je obavezan' : 'Number of people is required']);
      if (contactFormData.numOfChildren === undefined)
        setErrors((prev) => [...prev, shorthandCheck ? 'Broj djece je obavezan' : 'Number of children is required']);
    };

    validate();
  }, [contactFormData, shorthandCheck]);

  const [submit, submitting] = useFormspark({
    formId: formKey as string,
  });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (errors.length === 0) {
      const parsedData = {
        ['Ime']: contactFormData.name,
        ['Email adresa']: contactFormData.email,
        ['Broj telefona']: contactFormData.phone,
        ['Odabrana aktivnost']: contactFormData.activity,
        ['Dodatna poruka']: contactFormData.message,
        ['Željeni datum']: dayjs(contactFormData.dateOfVisitStart).format('DD.MM.YYYY'),
        ['Broj odraslih']: contactFormData.numOfPeople,
        ['Broj djece']: contactFormData.numOfChildren,
      };

      // console.log('PARSE', parsedData);

      await submit({
        ...parsedData,
      });

      // console.log({
      //   ...contactFormData,
      //   dateOfVisitStart: dayjs(contactFormData.dateOfVisitStart).format('DD.MM.YYYY'),
      // });
      toast.success(
        parseByLang(
          'Hvala na upitu, uskoro ćemo vam se javiti putem e-maila ili telefona! Ukoliko imate hitan upit, slobodno nas kontaktirajte putem telefona ili e-maila.',
          'Thank you for your inquiry, we will get back to you soon via email or phone! If you have an urgent query, feel free to contact us by phone or email.'
        )
      );
    } else {
      errors.forEach((error) => toast.error(error));
    }
  };

  const handleInputs = (inputEvent: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setContactFormData((_prev) => {
      return { ..._prev, [inputName]: inputEvent.target.value };
    });
  };

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContactFormData((_prev) => {
      return { ..._prev, ['message']: event.target.value };
    });

  const handleActivitySelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setContactFormData((_prev) => {
      return { ..._prev, ['activity']: event.target.value };
    });

  const onDateChangePick = (date: Date | null) => {
    setContactFormData((_prev) => {
      return {
        ..._prev,
        ['dateOfVisitStart']: date,
      };
    });
  };

  const handlePhoneInput = (event: E164Number) => {
    setContactFormData((_prev) => {
      return { ..._prev, ['phone']: event };
    });
  };

  return (
    <div className={styles.contactFormContainer}>
      <form action='' onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formBlockLeft}>
          <input
            onChange={(event) => handleInputs(event, 'name')}
            type='text'
            placeholder={parseByLang('Ime', 'Name')}
          />
          <input
            onChange={(event) => handleInputs(event, 'email')}
            type='email'
            placeholder={parseByLang('Email', 'Email')}
          />
          <div className={styles.phoneInputWrapp}>
            <PhoneInput
              defaultCountry='HR'
              onChange={(event) => handlePhoneInput(event!)}
              initialValueFormat='national'
              placeholder={parseByLang('Broj telefona', 'Phone number')}
              error={
                contactFormData.phone
                  ? isValidPhoneNumber(contactFormData.phone)
                    ? undefined
                    : 'Invalid phone number'
                  : 'Phone number required'
              }
            />
          </div>
          <input
            onChange={(event) => handleInputs(event, 'numOfPeople')}
            type='number'
            placeholder={parseByLang('Broj odraslih', 'Number of adults')}
            min={0}
            max={12}
          />
          <input
            onChange={(event) => handleInputs(event, 'numOfChildren')}
            type='number'
            placeholder={parseByLang('Broj djece ispod 12 godina', 'Number of children under 12')}
            min={0}
            max={12}
          />
          <div className={styles.datePickerWrapp}>
            <DatePicker
              onChange={(date) => onDateChangePick(date)}
              selected={contactFormData['dateOfVisitStart']}
              minDate={new Date()}
              placeholderText='Odaberite datum posjete'
              disabledKeyboardNavigation
              onFocus={(e) => e.target.blur()}
              // selectsRange
              // startDate={contactFormData['dateOfVisitStart']}
              // endDate={contactFormData['dateOfVisitEnd']}
            />
            <CalendarIcon className={`lg:text-2xl text-lg group-focus:text-interactive-green  text-text-white`} />
          </div>
          <select onChange={handleActivitySelect} name='aktivnost' id=''>
            <option
              value=''
              defaultValue={checkParams === UserLanguage.hr ? 'Odaberi aktivnost' : 'Pick activity'}
              selected
              disabled
            >
              {checkParams === UserLanguage.hr ? 'Odaberi aktivnost' : 'Pick activity'}
            </option>
            {webContent.map(
              (activity) =>
                activity['NASLOV AKTIVNOSTI HERO'] !== '' && (
                  <option value={activity['NASLOV AKTIVNOSTI HERO']} key={activity['NASLOV AKTIVNOSTI HERO']}>
                    {activity['NASLOV AKTIVNOSTI HERO']}
                  </option>
                )
            )}
          </select>
        </div>
        <div className={styles.formBlockRight}>
          <textarea
            onChange={handleTextarea}
            name=''
            placeholder={parseByLang('Poruka', 'Message')}
            id=''
            cols={30}
            rows={10}
          ></textarea>
          <AppButton isContact content={parseByLang('Pošalji upit', 'Send inquiry')} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
