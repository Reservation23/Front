import React, { MouseEventHandler } from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Button,
} from '@chakra-ui/react';

import TableRow from "../molecules/TableRow";
import {Store, StoreTableHeader} from "../../store/_reducer/store";

const storeTableHeaderList: StoreTableHeader[] = [
    {
        name: "번호",
        column: "storeId",
    },
    {
        name: "매장이름",
        column: "name",
    },
    {
        name: "수정",
        column: 'update',
        component: (handleClick: MouseEventHandler<HTMLButtonElement>) => <Button variant='outline' size="sm" onClick={handleClick} name="update">수정</Button>,
    },
    {
        name: "삭제",
        column: 'delete',
        component: (handleClick: MouseEventHandler<HTMLButtonElement>) => <Button colorScheme='red'size="sm" onClick={handleClick} name="delete">삭제</Button>,
    }
]

const StoreList = (props : {storeList : Store[]} ) => {
    const { storeList } = props;

    return (
        <TableContainer>
            <Table variant='simple' size='sm' colorScheme="facebook">
                <Thead>
                    <Tr>
                    {storeTableHeaderList.map((column)=> <Th>{column.name}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {storeList.map((store)=> <TableRow storeTableHeaderList={storeTableHeaderList} store={store}/>)}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default StoreList;