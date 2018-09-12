jQuery(document).ready(function () {
    ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });
    jQuery("#sendmail").click(function () {
        jQuery.post("php/sendmail.php", { to: jQuery("#emailto").val(), subject: jQuery("#emailsubject").val(), body: jQuery("#emailbody").val() }).done(function (data) {
            if (data == 'success') {
                swal(
                    'Good job!',
                    'Email has been sent successfully!',
                    'success'
                );
            } else {
                swal(
                    'Something Strange?',
                    data,
                    'question'
                )
            }
        });
    });
});