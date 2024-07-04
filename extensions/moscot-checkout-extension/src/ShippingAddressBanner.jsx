import {
    BlockSpacer,
    reactExtension,
    Text,
    useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
    'purchase.checkout.delivery-address.render-before',
    () => <Extension />,
);

function Extension() {

    const data = useShippingAddress()

    return (
        <>
            <Text>All fields are required unless marked as (optional)</Text>  
            <BlockSpacer spacing="extraTight" />      
            {data.address1 !== "" && data.address1 !== undefined &&
                <>
                    <Text appearance="critical">
                        Please specify your complete address.
                    </Text>
                    <BlockSpacer spacing="extraTight" />
                </>
            }
            <Text appearance="critical">
                Please update or confirm address
            </Text>
        </>
    );
}