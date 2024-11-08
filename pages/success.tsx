import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Container from 'components/Container';

interface SerialNumber {
  sn: string;
  expire_time: number;
}

export default function PaySuccessPage() {
  const router = useRouter();
  const [serialNumbers, setSerialNumbers] = useState<SerialNumber[]>([]);
  const [loading, setLoading] = useState(true);
  const { transaction_id } = router.query;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function fetchTransactionDetails() {
      if (transaction_id) {
        try {
          const response = await fetch(`https://api.lanplayer.app/api/lanplayer/getSerials?transaction_id=${transaction_id}`);
          const data = await response.json();
          if (data.code === 1) {
            setSerialNumbers(data.data);
            setLoading(false);
            // 成功获取数据后清除定时器
            if (intervalId) {
              clearInterval(intervalId);
            }
          }
        } catch (error) {
          console.error('Error fetching transaction details:', error);
        }
      }
    }

    // 立即执行一次
    fetchTransactionDetails();
    // 设置1秒轮询
    intervalId = setInterval(fetchTransactionDetails, 1000);

    // 清理函数
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [transaction_id]);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Serial number copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Payment Successful!</Title>
        <Description>Thank you for your purchase. We also send you an email with the serial numbers.</Description>

        {loading ? (
          <LoadingContainer>
            <Spinner />
            <LoadingText>Loading your serial numbers...</LoadingText>
          </LoadingContainer>
        ) : (
          serialNumbers.length > 0 && (
            <SerialNumberContainer>
              <Table>
              <thead>
                <TableRow>
                  <TableHeader>Serial Number</TableHeader>
                  <TableHeader>Expire Time</TableHeader>
                  <TableHeader>Action</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {serialNumbers.map((serial, index) => (
                  <TableRow key={index}>
                    <TableCell>{serial.sn}</TableCell>
                    <TableCell>
                      {serial.expire_time === -1
                        ? "Lifetime"
                        : new Date(serial.expire_time * 1000).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <CopyButton onClick={() => copyToClipboard(serial.sn)}>
                        Copy
                      </CopyButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            </SerialNumberContainer>
          )
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
  margin: 10rem 0;
  text-align: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
  color: rgb(var(--text-primary));
`;

const Description = styled.div`
  font-size: 1.5rem;
  opacity: 0.8;
  margin-top: 1rem;
  color: rgb(var(--text-secondary));
`;

const ImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 100%;
    height: 100%;
    color: #34d399; /* Tailwind Green-400 */
  }
`;

const ExpireDate = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: rgb(var(--text-secondary));
  opacity: 0.8;
`;

const ButtonContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SerialNumberContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(var(--background-lighter), 0.5);
  border-radius: 0.5rem;
`;


const SerialNumber = styled.div`
  font-family: monospace;
  padding: 1rem;
  background: rgba(var(--background-darker), 0.3);
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  color: rgb(var(--text-secondary));
`;

const SerialInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: rgba(var(--background-darker), 0.3);
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 1.2rem;
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(var(--text-secondary), 0.1);
  }
  font-size: 1.5rem;
`;

const TableHeader = styled.th`
  text-align: center;
  padding: 1rem;
  color: rgb(var(--text-primary));
  font-weight: 600;
  background: rgba(var(--background-darker), 0.5);
  font-size: 2rem;
`;

const TableCell = styled.td`
  padding: 1rem;
  color: rgb(var(--text-secondary));
  font-family: monospace;
`;

const CopyButton = styled.button`
  padding: 0.3rem 0.8rem;
  background: rgba(var(--primary), 0.1);
  border: 1px solid rgb(var(--primary));
  border-radius: 0.25rem;
  color: rgb(var(--primary));
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(var(--primary), 0.2);
  }
`;
const LoadingContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoadingText = styled.div`
  font-size: 1.2rem;
  color: rgb(var(--text-secondary));
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(var(--primary), 0.1);
  border-top: 5px solid rgb(var(--primary));
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;