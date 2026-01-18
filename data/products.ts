export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "cola",
        name: "Classic Cola",
        subName: "Timeless. Electric.",
        price: "₹120",
        description: "Bold fizz – Zero compromise – Iconic taste",
        folderPath: "/coke",
        themeColor: "#C62828",
        gradient: "linear-gradient(135deg, #C62828 0%, #8E0000 100%)",
        features: ["Signature Fizz", "Natural Flavors", "Ice-Cold Refreshment"],
        stats: [
            { label: "Fizz", val: "Maximum" },
            { label: "Sugar", val: "Balanced" },
            { label: "Flavor", val: "Iconic" }
        ],
        section1: {
            title: "Classic Cola.",
            subtitle: "Timeless. Electric."
        },
        section2: {
            title: "The original spark.",
            subtitle: "A bold fusion of caramel, spice, and citrus notes that defined generations."
        },
        section3: {
            title: "Instant refresh.",
            subtitle: "That sharp crack, the rising bubbles, the unmistakable bite."
        },
        section4: {
            title: "More than a drink.",
            subtitle: "A cultural icon in a bottle."
        },
        detailsSection: {
            title: "The Cola Formula",
            description:
                "Nano Coke is crafted using a closely guarded blend of botanical extracts, citrus oils, and caramelized sweetness. Each batch is carbonated to precision, delivering a sharp fizz and a clean finish that never overwhelms.",
            imageAlt: "Cola Bottle Details"
        },
        freshnessSection: {
            title: "Cold. Sealed. Perfected.",
            description:
                "Carbonation is locked at peak pressure and bottled immediately to preserve bite and aroma. Every bottle is shielded from heat and light to ensure the first sip tastes exactly as intended—electric and alive."
        },
        buyNowSection: {
            price: "₹120",
            unit: "per 300ml glass bottle",
            processingParams: ["High Carbonation", "Cold Filled", "Light-Protected"],
            deliveryPromise:
                "Next-day chilled delivery in metro cities with insulated packaging.",
            returnPolicy:
                "Not satisfied with the fizz? Instant replacement guaranteed."
        }
    }
];
