import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import { dollar } from '../../utils/icons';
import History from '../History/History';

const Dashboard = () => {
  const { totalExpenses, expenses, incomes, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>{dollar} {totalIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>{dollar} {totalExpenses()}</p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>{dollar} {totalBalance()}</p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <div className="min-max">
              <div className="salary">
                <h2 className="salary-title"><span>Income</span></h2>
                <div className="salary-item">
                  <p>
                    <span className="min">Min: </span>
                    {dollar}{Math.min(...incomes.map(item => item.amount))}
                  </p>
                  <p>
                    <span className="max">Max: </span>
                    {dollar}{Math.max(...incomes.map(item => item.amount))}
                  </p>
                </div>
              </div>
              <div className="expense">
                <h2 className="expense-title"><span>Expense</span></h2>
                <div className="expense-item">
                  <p>
                    <span className="min">Min: </span>
                    {dollar}{Math.min(...expenses.map(item => item.amount))}
                  </p>
                  <p>
                    <span className="max">Max: </span>
                    {dollar}{Math.max(...expenses.map(item => item.amount))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  background: #f0f4f8;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #333;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .stats-con {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .chart-con {
      flex: 3;
      background: #fff;
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .amount-con {
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;

        div {
          text-align: center;

          h2 {
            font-size: 1.2rem;
            color: #666;
          }

          p {
            font-size: 1.5rem;
            font-weight: 700;
            color: #333;
          }
        }
      }
    }

    .history-con {
      flex: 1;
      background: #fff;
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      max-height: 400px;
      overflow-y: auto;

      .min-max {
        margin-top: 2rem;

        .salary,
        .expense {
          margin-bottom: 1.5rem;

          .salary-title,
          .expense-title {
            font-size: 1.1rem;
            color: #666;
            text-align: center;
            margin-bottom: 0.5rem;

            span {
              color: #333;
              font-weight: 700;
            }
          }

          .salary-item,
          .expense-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            border-radius: 10px;
            background: #f7f7f7;
            font-size: 1.2rem;
            color: #333;

            .min {
              color: #F44336; /* Green for minimum */
              font-weight: bold;
            }

            .max {
              color:  #4CAF50; /* Red for maximum */
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;

export default Dashboard;
