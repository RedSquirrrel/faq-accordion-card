import React from 'react';
import CardContent from './components/CardContent/CardContent';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

import './App.css';

const options = [
  {
    id: 1,
    question: 'How many team members can I invite? ',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    id: 2,
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    id: 3,
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    id: 4,
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    id: 5,
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

const App = () => {
  return (
    <div>
      <div className='main'>
        <Card>
          <div className='cube'></div>
          <div className='container'>
            <div className='images'></div>

            <div className='accordion'>
              <h1 className='title'>FAQ</h1>
              {options.map(option => (
                <CardContent key={option.id} options={option} />
              ))}
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default App;
