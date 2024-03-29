interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-879-5684'
};

type Customer = BusinessPartner & Contact;
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
}

type Employee1 = Identity & BusinessPartner & Contact;
let e1: Employee1 = {
    id: 100,
    email: 'john.doe@example.com',
    name: 'John Doe',
    phone: '(408)-879-5684',
    credit: 1000
}
