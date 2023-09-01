import React from 'react';
import StoreList from '../../components/organisms/StoreList';
import {Store} from "../../store/_reducer/store";

const storeList: Store[] = [
    {storeId: 1, name: "테스트1"},
    {storeId: 2, name: "테스트2"},
    {storeId: 3, name: "테스트3"},
    {storeId: 4, name: "테스트4"},
]

const PartnerStore: React.FC = () => {
    return (
        <main>
            <div>관리자 헤더영역 추후에 layout으로 빠질예정</div>
            <section>
                <header>매장관리</header>
                <StoreList storeList={storeList}/>
            </section>
        </main>
    );
}

export default PartnerStore;