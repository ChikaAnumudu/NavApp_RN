import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
    const {navigation} = props;
    return (
        <DrawerContentScrollView {...props} >
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem label='HomeScreen' onPress={() => navigation.navigate('Home')}  />
        </DrawerContentScrollView>
    )
}