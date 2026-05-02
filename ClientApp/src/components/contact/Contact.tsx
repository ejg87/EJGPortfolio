import { useState } from 'react'
import type { ContactForm, SubmitStatus } from '../../types'
import styles from './Contact.module.scss'

const INITIAL_FORM: ContactForm = {
    name: '',
    email: '',
    message: ''
}

export default function Contact() {
    const [form, setForm] = useState<ContactForm>(INITIAL_FORM)
    const [status, setStatus] = useState<SubmitStatus>('idle')
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        // Basic client side validation before hitting the API
        if (!form.name || !form.email || !form.message) {
            setErrorMsg('All fields are required.')
            return
        }

        setStatus('loading')
        setErrorMsg(null)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.message ?? 'Something went wrong.')
            }

            // Success — reset form and show success state
            setStatus('success')
            setForm(INITIAL_FORM)

        } catch (err) {
            setStatus('error')
            setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.inner}>

                {/* Section Header */}
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Get In Touch</p>
                    <h2 className={styles.title}>Contact</h2>
                    <p className={styles.subtitle}>
                        Have an opportunity or just want to connect? Send me a message
                        and I'll get back to you.
                    </p>
                </div>

                <div className={styles.layout}>

                    {/* Contact Info */}
                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <span className={styles.infoValue}>egoralewski87@gmail.com</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Location</span>
                            <span className={styles.infoValue}>Pennsylvania, USA</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>GitHub</span>

                         <a   href="https://github.com/ejg87"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoLink}
              >
                            github.com/ejg87
                        </a>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Status</span>
                        <span className={styles.available}>Open to Opportunities</span>
                    </div>
                </div>

                {/* Form */}
                <div className={styles.formWrap}>

                    {/* Success Message */}
                    {status === 'success' && (
                        <div className={styles.successMsg}>
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMsg && (
                        <div className={styles.errorMsg}>{errorMsg}</div>
                    )}

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={styles.input}
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className={styles.textarea}
                            placeholder="Your message..."
                            rows={6}
                            value={form.message}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                        />
                    </div>

                    <button
                        className={styles.submit}
                        onClick={handleSubmit}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                </div>
            </div>
        </div>
    </section >
  )
}