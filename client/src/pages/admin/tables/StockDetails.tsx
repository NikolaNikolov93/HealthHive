import styled from "styled-components";

type StockDetailsProps = {
  stockDetails: Map<string, number>;
};

const StockDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const StockDetails: React.FC<StockDetailsProps> = ({ stockDetails }) => {
  return (
    <StockDetailsList>
      {Object.entries(stockDetails).map(([date, stock]) => (
        <li key={date}>
          {new Date(date).toLocaleDateString()}: {stock} in stock
        </li>
      ))}
    </StockDetailsList>
  );
};

export default StockDetails;
