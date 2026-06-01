$('#contactForm').on('submit', function (e) {
    formData = new FormData(this);
    e.preventDefault();
    let formId = $('#contactForm');
    formData.append('send', true)
    formId.find('.is-invalid').removeClass('is-invalid');
    formId.find('.invalid-feedback').empty();
    $('#submitBtn').prop('disabled', true).html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'
    );
    let comonBtn = ` SUBMIT NOW <svg class="ms-2" width="16" height="14" viewBox="0 0 16 14"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.5264 0C7.5264 0.6962 8.21633 1.738 8.9138 2.61293C9.81193 3.7394 10.8838 4.72347 12.1137 5.4748C13.0351 6.0374 14.154 6.57747 15.0528 6.57747M7.5264 13.1712C7.5264 12.475 8.21633 11.4332 8.9138 10.5583C9.81193 9.43187 10.8838 8.44773 12.1137 7.6964C13.0351 7.1338 14.154 6.59373 15.0528 6.59373M15.0528 6.5856H0"
                                                            stroke="currentColor" stroke-width="1.5"></path>
                                                    </svg>`;
    $.ajax({
        method: formId.attr('method'),
        url: 'mail.php',
        data: formData,
        contentType: false,
        processData: false,
        dataType: 'json',

        success: function (response) {
            if (response.status == 'success') {
                formId[0].reset();
                alert(response.message);
                $('#submitBtn').prop('disabled', false).html(comonBtn);
            } else {
                if (response.validate) {
                    $.each(response.validate, function (key, value) {
                        $('#' + key).addClass('is-invalid');
                        $('#' + key + '_error').text(`${value}`);
                    });
                }
                $('#submitBtn').prop('disabled', false).html(comonBtn);
                alert(response.message);
            }
        }
    })
})