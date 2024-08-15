import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

function ExpenseForm() {
    const { addExpense, error } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',
    });

    const { title, amount, date, category } = inputState;

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addExpense(inputState);
        setInputState({
            title: '',
            amount: '',
            date: null,
            category: '',
            description: '',
        })
    };

    return (
        <div>
            <ExpenseFormStyled onSubmit={handleSubmit}>
            {error && <p className = "error">{error}</p>}
                <div className="input-control">
                    <input
                        type="text"
                        value={title}
                        name={'title'}
                        placeholder='Expense Title'
                        onChange={handleInput('title')}
                    />
                </div>
                <div className="input-control">
                    <input
                        value={amount}
                        type="number"
                        name={'amount'}
                        id={'amount'}
                        placeholder={'Expense Amount'}
                        onChange={handleInput('amount')}
                    />
                </div>

                <div className="selects input-control">
                    <select required value={category} name="category" onChange={handleInput('category')}>
                        <option value="" disabled>Select Option</option>
                        <option value="education">Education</option>
                        <option value="groceries">Groceries</option>
                        <option value="health">Medical</option>
                        <option value="TV">Subscriptions</option>
                        <option value="takeaway">Takeaways</option>
                        <option value="clothing">Clothing</option>
                        <option value="travelling">Travel</option>
                        <option vakue="food">Food</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="input-control">
                    <DatePicker
                        id='date'
                        placeholderText='Enter A Date'
                        selected={date}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => setInputState({ ...inputState, date })}
                        className="datepicker"
                    />
                </div>

                <div className="input-control">
                    <textarea
                        value={inputState.description}
                        name="description"
                        placeholder="Add a Description"
                        onChange={handleInput('description')}
                    />
                </div>

                <div className="submit-btn">
                    <Button
                        name={'Add Expense'}
                        icon={plus}
                        bPad={'0.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--color-accent)'}
                        color={'#fff'}
                    />

                </div>
            </ExpenseFormStyled>
        </div>
    );
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    background: linear-gradient(145deg, #D3D3D3);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 4px 4px 12px rgba(0.3, 0.3, 0.3, 0.3);
    max-width: 500px;
    margin: 0 auto;

    .input-control {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        input, select, textarea {
            padding: 0.9rem;
            font-size: 1rem;
            border-radius: 8px;
            border: 1px solid #ccc;
            outline: none;
            transition: all 0.3s ease;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: #FFFFFF;
        }

        input:focus, select:focus, textarea:focus {
            border-color: #FFFFFF;
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
        }

        textarea {
            resize: none;
            height: 100px;
        }
    }

    .datepicker {
        padding: 0.9rem;
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #ccc;
        outline: none;
        width: 100%;
        transition: all 0.3s ease;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;

        &:focus {
            border-color: #007BFF;
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.9);
        }
    }

    .submit-btn {
        display: flex;
        justify-content: flex-end;

        button {
            padding: 0.9rem 2rem;
            font-size: 1rem;
            border-radius: 8px;
            background: linear-gradient(145deg, #007BFF, #0056b3);
            color: #fff;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;

            &:hover {
                background: linear-gradient(145deg, #0056b3, #034556);
                transform: translateY(-2px);
            }

            &:active {
                transform: translateY(0);
            }
        }
    }
`;

export default ExpenseForm;
