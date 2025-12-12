import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldSet, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ContactForm() {
    return (
        <div className="max-w-md mx-auto">
            <form action="">
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="name">Full name</FieldLabel>
                            <Input id="name" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input id="email" type="email" required />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="phone">Phone <span className="text-xs">Optional</span></FieldLabel>
                            <Input id="phone" type="tel" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="company">Company <span className="text-xs">Optional</span></FieldLabel>
                            <Input id="company" type="text" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="message">How can we help you?</FieldLabel>
                            <Textarea id="message" required />
                        </Field>
                        <Field>
                            <Button variant="primary" size="lg" type="submit">Send</Button>
                        </Field>
                        <Field>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" required />
                                <Label htmlFor="terms">I have read and accept the <Link className="underline" href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</Link></Label>
                            </div>
                        </Field>
                        <Field>
                            <p className="font-light text-xs text-text-dark-muted">Basic Information on Data Protection. Responsible: SIRVELIA.COM. Purpose: Sending personalized budgets based on the indications that you make us and the subsequent commercial follow-up of the proposal sent. Rights: You may exercise your rights of access, rectification, limitation and deletion of data in this form as well as the right to file a complaint with a supervisory authority. Additional information: In the Privacy Policy of SIRVELIA.COM</p>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </form>
        </div>
    );
}