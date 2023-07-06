import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface I18nContent {
    es: LanguageContent
    en: LanguageContent
}

export interface LanguageContent {
    navbar: Navbar
    header: Header
    promotions: Promotion[]
    carousel: Carousel
    buttonBook: ButtonBook
    legals: string
    prefooter: Prefooter
    footer: Footer
}

export interface Navbar {
    logo: string
    menu: Menu
}

export interface Menu {
    lang: Lang
    contact: string
    currency: string[]
}

export interface Lang {
    title: string
    href: string
}

export interface Header {
    h1: string
    discount: string
    paragraphs: string[]
}

export interface Promotion {
    title: string
    logoPromo: string
    Subtitle: string
    paragraphs: string[]
    button: Button
    imagePromo: string
}

export interface Button {
    href: string
    text: string
}

export interface Carousel {
    text: string
    desktop: ImgSrc[]
    mobile: ImgSrc[]
}

export interface ImgSrc {
    src: string
    alt: string
}

export interface ButtonBook {
    href: string
    text: string
}

export interface Prefooter {
    contactCenter: ContactCenter
    numbers: Number[]
    social: Social
}

export interface ContactCenter {
    title: string
    email: string
}

export interface Number {
    name: string
    number?: string
    href?: string
    main?: boolean
}

export interface Social {
    facebookUrl: string
    instagramUrl: string
    twitterUrl: string
}

export interface Footer {
    copy: string
    links: Link[]
}

export interface Link {
    tittle: string
    href: string
}

export interface AdditionalI18nContent {
    es: AdditionalLanguageContent
    en: AdditionalLanguageContent
}

export interface AdditionalLanguageContent {
    resumeBookReservation: ResumeBookReservation
    thankYouPage: ThankYouPage,
    button: Button,
}

export interface ResumeBookReservation {
    reservationMessage: string
    instructions: string
    closeButton: string
    confirmButton: string
}

export interface ThankYouPage {
    message: string
    thankyou: string
}

export interface Button {
    text: string
}

export const i18nApiSlice = createApi({
    reducerPath: 'i18nApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://raw.githubusercontent.com',
    }),
    endpoints(builder) {
        return {
            fetchI18n: builder.query<I18nContent, void>({
                query() {
                    return `/javialcocer/test-json/main/data.json`;
                },
            }),
            fetchAdditionalI18n: builder.query<AdditionalI18nContent, void>({
                query() {
                    return `/eildgc/frontend-test/main/i18n/additional.json`;
                },
            }),
        };
    },
});

export const { useFetchI18nQuery, useFetchAdditionalI18nQuery } = i18nApiSlice;