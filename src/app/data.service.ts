import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import Autocomplete from 'devextreme/ui/autocomplete';

export class Employee {
  ID: number;
  nome: string;
  sobrenome: string;
  prefixo: string;
  cargo: string;
  data_de_nascimento: string;
  data_de_contratação: string;
  Notes: string;
  Address: string;
  AddressRequired: boolean;
  StateID: number;

}

export const getForm: Employee = {
  ID: 0,
  AddressRequired: false,
  StateID: 0,
  nome: '',
  sobrenome: '',
  prefixo: '',
  cargo: '',
  data_de_nascimento: '',
  data_de_contratação: '',
  Notes: '',
  Address: '',
};

export class State {
  ID: number;
  Name: string;
}

let employees: Employee[] = [
  {
    ID: 1,
    nome: 'matheus',
    sobrenome: 'Arannte',
    prefixo: 'Mr.',
    cargo: 'CEO',
    data_de_nascimento: '1964/03/16',
    data_de_contratação: '1995/01/15',
    Notes:
      'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St.',
    AddressRequired: true,
    StateID: 5,
  },
  {
    ID: 2,
    nome: 'Olivia',
    sobrenome: 'Rodrigo',
    prefixo: 'Ms.',
    cargo: 'A GOOD 4 YOU',
    data_de_nascimento: '1981/06/03',
    data_de_contratação: '2012/05/14',
    Notes:
      'Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
    Address: '807 W Paseo Del Mar',
    AddressRequired: false,
    StateID: 5,
  },
  {
    ID: 3,
    nome: 'Robert',
    sobrenome: 'patsson',
    prefixo: 'Mr.',
    cargo: 'CMO',
    data_de_nascimento: '1974/09/07',
    data_de_contratação: '2002/11/08',
    Notes:
      'Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
    Address: '4 Westmoreland Pl.',
    AddressRequired: true,
    StateID: 4,
  },
  {
    ID: 4,
    nome: 'Greta',
    sobrenome: 'Sims',
    prefixo: 'Ms.',
    cargo: 'HR Manager',
    data_de_nascimento: '1977/11/22',
    data_de_contratação: '1998/04/23',
    Notes:
      "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
    Address: '1700 S Grandview Dr.',
    AddressRequired: false,
    StateID: 11,
  },
  {
    ID: 5,
    nome: 'Brett',
    sobrenome: 'pitt',
    prefixo: 'Mr.',
    cargo: 'IT Manager',
    data_de_nascimento: '1968/12/01',
    data_de_contratação: '2009/03/06',
    Notes:
      'Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
    Address: '1120 Old Mill Rd.',
    AddressRequired: false,
    StateID: 13,
  },
  {
    ID: 6,
    nome: 'Sandra',
    sobrenome: 'Roberta',
    prefixo: 'Mrs.',
    cargo: 'Controller',
    data_de_nascimento: '1974/11/15',
    data_de_contratação: '2005/05/11',
    Notes:
      "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    Address: '4600 N Virginia Rd.',
    AddressRequired: false,
    StateID: 44,
  },
  {
    ID: 7,
    nome: 'Kevin',
    sobrenome: 'Caido',
    prefixo: 'Mr.',
    cargo: 'Shipping Manager',
    data_de_nascimento: '1978/01/09',
    data_de_contratação: '2009/08/11',
    Notes:
      'Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.',
    Address: '424 N Main St.',
    AddressRequired: true,
    StateID: 5,
  },
  {
    ID: 8,
    nome: 'Cynthia',
    sobrenome: 'Luz',
    prefixo: 'Ms.',
    cargo: 'HR Assistant',
    data_de_nascimento: '1985/06/05',
    data_de_contratação: '2008/03/24',
    Notes:
      'Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!',
    Address: '2211 Bonita Dr.',
    AddressRequired: true,
    StateID: 4,
  },
  {
    ID: 9,
    nome: 'Kent',
    sobrenome: 'Superman',
    prefixo: 'Dr.',
    cargo: 'Ombudsman',
    data_de_nascimento: '1972/09/11',
    data_de_contratação: '2009/04/22',
    Notes:
      'As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.',
    Address: '12100 Mora Dr',
    AddressRequired: true,
    StateID: 26,
  },
  {
    ID: 10,
    nome: 'Taylor',
    sobrenome: 'Swift',
    prefixo: 'Dr.',
    cargo: 'Network Admin',
    data_de_nascimento: '1982/08/14',
    data_de_contratação: '2012/04/14',
    Notes:
      "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
    Address: '7776 Torreyson Dr',
    AddressRequired: true,
    StateID: 5,
  },
  {
    ID: 11,
    nome: 'Sam',
    sobrenome: 'Winchester',
    prefixo: 'Mr.',
    cargo: 'Sales Assistant',
    data_de_nascimento: '1984/02/17',
    data_de_contratação: '2012/02/01',
    Notes:
      'Sammy is proud to be a member of the DevAV team. He joined the team in 2012 and has been in the sales department from the beginning.\r\n\r\nHe has just picked up golf so you can find him on the links every weekend.',
    Address: '645 Prospect Crescent',
    AddressRequired: true,
    StateID: 11,
  },
  {
    ID: 12,
    nome: 'Kelly',
    sobrenome: 'Key',
    prefixo: 'Ms.',
    cargo: 'Support Assistant',
    data_de_nascimento: '1988/05/11',
    data_de_contratação: '2012/10/13',
    Notes:
      "Kelly loves people and that's why she joined DevAV's support department. One of the funniest people in the company, she does stand-up on the weekends at the Laugh Factory.",
    Address: '1601 W Mountain St.',
    AddressRequired: true,
    StateID: 5,
  },
  {
    ID: 13,
    nome: 'Natalia',
    sobrenome: 'Maguirre',
    prefixo: 'Mrs.',
    cargo: 'Trainer',
    data_de_nascimento: '1977/10/07',
    data_de_contratação: '2008/06/19',
    Notes:
      'Natalie travels the US and teaches our partners how to explain the benefits of our products to customers.\r\n\r\nShe is a proud wife and mom and volunteers her time at the elementary school.',
    Address: '6400 E Bixby Hill Rd',
    AddressRequired: true,
    StateID: 29,
  },
  {
    ID: 14,
    nome: 'Walter',
    sobrenome: 'jhon',
    prefixo: 'Mr.',
    cargo: 'Programmer',
    data_de_nascimento: '1984/12/24',
    data_de_contratação: '2011/02/17',
    Notes:
      "Walter has been developing apps and websites for DevAV since 2011. His passion is software and if you ever walk by his desk, you'll know why.\r\n\r\nWally once worked 72 hours straight - writing code and fixing bugs.",
    Address: '10385 Shadow Oak Dr',
    AddressRequired: true,
    StateID: 13,
  },
];

let states: State[] = [
  {
    ID: 1,
    Name: 'Selecione o estado',
  },{
    ID: 2,
    Name: 'Alabama',
  },
  {
    ID: 3,
    Name: 'Alaska',
  },
  {
    ID: 4,
    Name: 'Arizona',
  },
  {
    ID: 5,
    Name: 'Arkansas',
  },
  {
    ID: 6,
    Name: 'California',
  },
  {
    ID: 7,
    Name: 'Colorado',
  },
  {
    ID: 8,
    Name: 'Connecticut',
  },
  {
    ID: 9,
    Name: 'Delaware',
  },
  {
    ID: 10,
    Name: 'District of Columbia',
  },
  {
    ID: 11,
    Name: 'Florida',
  },
  {
    ID: 12,
    Name: 'Georgia',
  },
  {
    ID: 13,
    Name: 'Hawaii',
  },
  {
    ID: 14,
    Name: 'Idaho',
  },
  {
    ID: 15,
    Name: 'Illinois',
  },
  {
    ID: 16,
    Name: 'Indiana',
  },
  {
    ID: 17,
    Name: 'Iowa',
  },
  {
    ID: 18,
    Name: 'Kansas',
  },
  {
    ID: 19,
    Name: 'Kentucky',
  },
  {
    ID: 20,
    Name: 'Louisiana',
  },
  {
    ID: 21,
    Name: 'Maine',
  },
  {
    ID: 22,
    Name: 'Maryland',
  },
  {
    ID: 23,
    Name: 'Massachusetts',
  },
  {
    ID: 24,
    Name: 'Michigan',
  },
  {
    ID: 25,
    Name: 'Minnesota',
  },
  {
    ID: 26,
    Name: 'Mississippi',
  },
  {
    ID: 27,
    Name: 'Missouri',
  },
  {
    ID: 28,
    Name: 'Montana',
  },
  {
    ID: 29,
    Name: 'Nebraska',
  },
  {
    ID: 30,
    Name: 'Nevada',
  },
  {
    ID: 31,
    Name: 'New Hampshire',
  },
  {
    ID: 32,
    Name: 'New Jersey',
  },
  {
    ID: 33,
    Name: 'New Mexico',
  },
  {
    ID: 34,
    Name: 'New York',
  },
  {
    ID: 35,
    Name: 'North Carolina',
  },
  {
    ID: 36,
    Name: 'Ohio',
  },
  {
    ID: 37,
    Name: 'Oklahoma',
  },
  {
    ID: 38,
    Name: 'Oregon',
  },
  {
    ID: 39,
    Name: 'Pennsylvania',
  },
  {
    ID: 40,
    Name: 'Rhode Island',
  },
  {
    ID: 41,
    Name: 'South Carolina',
  },
  {
    ID: 42,
    Name: 'South Dakota',
  },
  {
    ID: 43,
    Name: 'Tennessee',
  },
  {
    ID: 44,
    Name: 'Texas',
  },
  {
    ID: 45,
    Name: 'Utah',
  },
  {
    ID: 456,
    Name: 'Vermont',
  },
  {
    ID: 47,
    Name: 'Virginia',
  },
  {
    ID: 48,
    Name: 'Washington',
  },
  {
    ID: 49,
    Name: 'West Virginia',
  },
  {
    ID: 51,
    Name: 'Wyoming',
  },
  {
    ID: 52,
    Name: 'North Dakota',
  },
  {
    ID: 53,
    Name: 'Wisconsin',
  },
];

@Injectable()
export class DataService {
  getEmployees() {
    return employees;
  }
  getStates() {
    return states;
  }

}

