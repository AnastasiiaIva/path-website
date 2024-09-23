import { useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Register from './Register';


function LRTabs() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

<TabList className="tabs">
    <Tab className="span">Log in</Tab>
    <Tab className="span">Register</Tab>
</TabList>



<TabPanel>

    <Login />

</TabPanel>



<TabPanel>

    <Register />

</TabPanel>


</Tabs>
        </>
  );
}

export default LRTabs