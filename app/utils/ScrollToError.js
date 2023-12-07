import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';

export function ScrollToError() {
    const formik = useFormikContext();
    const submitting = formik?.isSubmitting;

    useEffect(() => {
        if (submitting) {
            const errorElement = document.querySelector('.Mui-error, [data-error]');
            if (errorElement) {
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [submitting]);

    return null;
}
