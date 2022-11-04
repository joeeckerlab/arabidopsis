import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../../DashboardComponents';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import {useStateContext} from '../../contexts/ContextProvider';
import product9 from '../../data/product9.png';
import { CCollapse, CCardBody, CButton, CCard } from '@coreui/react'


const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
);

const Ecommerce = () => {
    const { currentColor, currentMode, visible, setVisible } = useStateContext();
    const remoteData: DataManager = new DataManager({
        url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
        adaptor: new WebApiAdaptor,
        crossDomain: true
    })
    const dataQuery: Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();

    return (

        <div className="mt-24 space-y-10">

            {/*TODO: Adjust the size of the select bar and the data. */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
                <div className="bg-white dark:bg-secondary-dark-bg md:w-1/2 border-1 border-color px-2 py-1 rounded-md">
                    <MultiSelectComponent
                        placeholder="Select genes"
                        dataSource={remoteData}
                        query={dataQuery}
                        fields={{value:"EmployeeID", text:"FirstName"}}
                    ></MultiSelectComponent>
                </div>

            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">

                {/*Removed bg-hero-pattern*/}
                {/*TODO: Change the size of the white box. */}
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-full rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">Selected Gene</p>
                            {/*TODO: Change <p> into gene names responsive to selected genes. */}
                            <p className="text-2xl">Cux2</p>
                        </div>

                        {/*<Button*/}
                        {/*    type="button"*/}
                        {/*    style={{ backgroundColor: currentColor }}*/}
                        {/*    className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"*/}
                        {/*>*/}
                        {/*    <BsCurrencyDollar />*/}
                        {/*</Button>*/}

                    </div>
                    <div className="mt-6">
                        {/*<p className="font-bold text-gray-400">Description</p>*/}
                        {/*<p className="text-sm text-gray-400  mt-1">cut-like homeobox 2 (Source:MGI Symbol;Acc:MGI:107321)</p>*/}
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Review"
                            borderRadius="10px"
                        />
                    </div>
                </div>

                {/*TODO: 1. Add Expand component to the white box.
                2. Make the descriptions responsive to multiselect input. */}
                <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
                    {earningData.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white h-full
                            dark:text-gray-200
                            dark:bg-secondary-dark-bg md:w-56
                            p-4 pt-9 rounded-2xl "
                        >
                            <button
                                type="button"
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl opacity-0.9
                                rounded-full  p-4
                                hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg
                                font-semibold">
                                    {item.amount}
                                </span>
                                {/*<span className={`text-sm text-${item.pcColor} ml-2`}>*/}
                                {/*    {item.percentage}*/}
                                {/*</span>*/}
                            </p>
                            <p>Expand</p>
                            {/*<CButton onClick={() => setVisible(!visible)}>Button</CButton>*/}
                            {/*<CCollapse visible={visible}>*/}
                            {/*    <CCard className="mt-3">*/}
                            {/*        <CCardBody>*/}
                            {/*            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad*/}
                            {/*            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt*/}
                            {/*            sapiente ea proident.*/}
                            {/*        </CCardBody>*/}
                            {/*    </CCard>*/}
                            {/*</CCollapse>*/}
                            {/*<p className="text-sm text-gray-400  mt-1">{item.title}</p>*/}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-10 flex-wrap justify-center ">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">Selected Gene</p>
                            {/*TODO: Change <p> into gene names responsive to selected genes. */}
                            <p className="text-2xl">Cux2</p>
                        </div>
                    </div>

                    {/*TODO: 1. Figure out how to insert space between <p>. 2. Figure out how to make this responsive to selective genes.*/}
                    <div className="mt-6">
                        <p className="font-bold text-gray-400">Description:</p>
                        <p className="text-sm text-gray-400  mt-1">cut-like homeobox 2 (Source:MGI Symbol;Acc:MGI:107321)</p>
                        <p className="font-bold text-gray-400">Location:</p>
                        <p className="text-sm text-gray-400  mt-1">chr5:121856366-122050102, reverse strand.</p>
                        <p className="font-bold text-gray-400">Gene Body Length:</p>
                        <p className="text-sm text-gray-400  mt-1">193736 bp</p>
                        <p className="font-bold text-gray-400">Gene Type:</p>
                        <p className="text-sm text-gray-400  mt-1">Protein coding</p>
                        <p className="font-bold text-gray-400">Phenotype [Ensemble]:</p>
                        <p className="text-sm text-gray-400  mt-1">abnormal cell cycle, abnormal cerebral cortex morphology, abnormal embryonic/fetal subventricular zone morphology, abnormal neocortex morphology, abnormal neural tube marginal layer morphology, abnormal neural tube morphology, abnormal neural tube ventricular layer morphology, abnormal neuronal precursor proliferation, abnormal spinal cord interneuron morphology, abnormal ventral spinal root morphology... (see remaining items in the Ensembl Database).</p>
                        <p className="font-bold text-gray-400">More Details in the External Databases:</p>
                        {/*TODO: Turn this into a list of linked items. */}
                        <p className="text-sm text-gray-400  mt-1">Protein coding</p>
                    </div>
                </div>

                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Gene-Cell Type Box Plot</p>
                        {/*TODO: Change the dropdown content to be Coordinates. */}
                        <DropDown currentMode={currentMode} />

                    </div>
                    {/*TODO: Turn this into a bar plot. */}
                    <div className="md:w-full overflow-auto">
                        <LineChart />
                    </div>
                </div>
            </div>


            {/*TODO: Update this Revenue Updates component into another graph.*/}
            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Cell Meta Scatter</p>
                        {/*TODO: 1. Add caption. 2. Change the dropdown content to be Coordinates. */}
                        <DropDown currentMode={currentMode} />
                        {/*TODO: 1. Add caption. 2. Change the dropdown content to be Cell Meta. */}
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="md:w-full overflow-auto">
                        <Pie id="pie-chart" data={ecomPieChartData}/>
                    </div>
                </div>

                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Gene Scatter</p>
                        {/*TODO: Change the dropdown content to be Coordinates. */}
                        <DropDown currentMode={currentMode} />
                        {/*TODO: Change the dropdown content to be Cell Meta. */}
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="md:w-full overflow-auto">
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecommerce;