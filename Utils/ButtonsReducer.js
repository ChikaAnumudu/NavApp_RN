
export default function ButtonsReducer( buttons, action ) {
    switch (action.type) {
        case 'delete' : {
            const newButtons = buttons.filter((button) => button.id !== action.id);
            console.log('delete in reducer action');
            return(newButtons);
        }
        case 'add' : {
            const newColoredButton = [ {id:action.id, ...action.button}, ...buttons];
            console.log("add in reducer action");

            return(newColoredButton)
        }
        case 'update' : {
            const newButtons = buttons.map((button) => {
                if (button.id === action.button.id) {
                return action.button;
                } else {
                return button;
                }
            });
            console.log("update in reducer action");
            return(newButtons);            
        }

        default : {
            throw Error('Unknown action: ' + action.type)
        }

    }
}

// const styles = StyleSheet.create({})