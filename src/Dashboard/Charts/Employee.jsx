import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import {employeesData, employeesGrid} from '../../data/dummy';
import {Header} from  '../../DashboardComponents'

/*TODO: Maybe consider turning Employee page into Orders page because it has search function*/
const Employees = () => {
    const toolbarOptions = ['Search'];

    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Table" title="Contribute Annotations" />
            <GridComponent
                dataSource={employeesData}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                editSettings={editing}
                toolbar={toolbarOptions}
            >
                <ColumnsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                {/*TODO: Note that this is where the search comes from.*/}
                <Inject services={[Search, Page]} />

            </GridComponent>
        </div>
    );
};
export default Employees;