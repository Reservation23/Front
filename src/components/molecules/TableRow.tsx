import React from 'react';
import {Td, Tr} from "@chakra-ui/react";

import {Store, StoreTableHeader} from "../../store/_reducer/store";

function TableRow(props: {store: Store, storeTableHeaderList: StoreTableHeader[]}) {
    const { store, storeTableHeaderList } = props;

    function getTd(header: StoreTableHeader){
        const { component, column } = header;
        if(component) return <Td>{component(handleButtonClick)}</Td>;
        return <Td>{store[column as keyof Store]}</Td>;
    }

    function handleClickRow() {
        console.log(store);
    }

    function handleButtonClick(e: any) {
        e.stopPropagation();
        console.log(store); // 현재 수정 및 삭제할 대상
        console.log(e.target.name); // update, delete
    }

    return <Tr onClick={handleClickRow}>{storeTableHeaderList.map(getTd)}</Tr>;
}

export default TableRow;