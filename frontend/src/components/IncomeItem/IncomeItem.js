import React from 'react';
import styled from 'styled-components';
import { trash, dollar, calender, comment, money, bitcoin, piggy, youtube, card, users, stocks, freelance, book, food, medical, TV, clothing, circle } from '../../utils/icons'; // Ensure all icons are correctly imported
import Button from '../Button/Button'; 
import { dateFormat } from '../../utils/dateFormat';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    
    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'freelance':
                return freelance;
            case 'investment':
                return stocks;
            case 'stocks':
                return stocks;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return youtube;
            case 'other':
                return piggy;
            default:
                return dollar;
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return TV;
            case 'takeways':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ' '
        }
    }

     console.log('type', type)

    return (
        <IncomeItemStyled indicatorColor={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>
                            {dollar} {amount}
                        </p>
                        <p>
                            {calender} {dateFormat(date)}
                        </p>
                        <p>
                            {comment} {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    );
}

const IncomeItemStyled = styled.div`
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #000000;

    .icon {
        width: 50px;
        height: 50px;
        border-radius: 20px;
        background: ${(props) => props.indicatorColor || '#FFFFFF'};
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #A9A9A9;

        svg {
            font-size: 2.6rem;
            color: #fff;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h5 {
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            color: #000;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                background: ${(props) => props.indicatorColor || '#000000'};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.5rem;

            .text {
                display: flex;
                flex-direction: column;
                gap: 0.3rem;

                p {
                    margin: 0;
                    font-size: 1rem;
                    color: #555;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    svg {
                        font-size: 1.2rem;
                        color: var(--primary-color);
                    }

                    span {
                        color: #000;
                    }
                }
            }

            .btn-con {
                display: flex;
                align-items: center;
            }
        }
    }
`;

export default IncomeItem;
