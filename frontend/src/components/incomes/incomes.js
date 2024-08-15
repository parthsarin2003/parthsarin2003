import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import IncomeItem from '../IncomeItem/IncomeItem';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';




function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
    useLayoutEffect(() => {
        getIncomes()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount} date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-white)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`

 display: flex;
 overflow: auto;

.total-income
{
       display: flex;
       justify-content: center;
       align-items: center;
       background: #FFFFFF;
       border: 2px solid #A9A9A9;
       box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
       border-radius: 20px;
       padding: 1rem;
       margin: 1rem 0;
       font-size: 2rem;
       gap: 0.5rem;
       span{
       font-size: 2.5rem;
       font-size: 800;
       color: var(--color-green);
       }
    }
  .income-content {
    display: flex;
    gap: 2rem;
    width: 120%;


    .form-container {
      flex: 1;
      width: 100%;
      height: 100%;
    }

    .incomes {
      flex: 2;
      /* Add styles for your incomes list */
    }
  }
`;

export default Income;
