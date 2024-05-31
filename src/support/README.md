# Support and feedback

Thank you for exploring NodeScript. Please note that we're currently in an active development phase, and your feedback is invaluable to us. You can contact us at: 

[support@nodescript.dev](mailto:support@nodescript.dev)

If you have any questions or need help with a specific issue, please check our Frequently Asked Questions (FAQ) section. If you can't find a solution to your issue there, ask us directly through the support chat. We're committed to making NodeScript better every day and we appreciate your contribution to this journey.


<script>
    // Script to open Slaask chat automatically when loading the page.
    export default {
        mounted() {
            var checkSlaask = setInterval(function() {
                if (window._slaask) {
                    window._slaask.show();
                    clearInterval(checkSlaask);
                }
            }, 100); 
        }
    }
</script>