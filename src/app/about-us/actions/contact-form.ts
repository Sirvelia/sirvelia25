'use server'

export async function contactForm(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const terms = formData.get('terms') as string;

    console.log(name, email, phone, company, message, terms);

    if (!terms) {
        return { error: 'You must accept the terms and conditions' };
    }

    return { success: true };
}