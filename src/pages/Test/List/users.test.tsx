import { render, screen } from '@testing-library/react';
import { Users } from '../../../components/Tests/List'
import { act } from 'react-dom/test-utils';
import { getUsers } from '../../../components/Tests/List/users';

jest.mock("../../../components/Tests/List/users", () => {
    return {
      getUsers: jest.fn()
    };
  });

describe('Users', () => {
  beforeEach(()=>{
  const users = [
    {
      name: 'Bruce Wayne',
    },
    {
      name: 'Clark Kent',
    },
    {
      name: 'Peter B. Parker',
    },
  ];
  act(()=>{

    (getUsers as jest.Mock).mockReturnValue(Promise.resolve(users))
  })
  })
  test('Renderizar', () => {
    act(() => {
      render(<Users />)
    })
    const textElement = screen.queryByText('Usuarios')
    expect(textElement).toBeInTheDocument()
  })

  test('Lista de users', async () => {
    act(() => {
      render(<Users />)
    })
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(4)
  })
})
// 23793.38029 60001.437882 34006.333305 1 96690000024340