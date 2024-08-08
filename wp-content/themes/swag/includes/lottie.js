function loadLottieAnimation() {
    const lotties = [...document.querySelectorAll('.js-lottie')];

    lotties.forEach($lottie => {
        const name = $lottie.getAttribute('data-name');

        const params = {
            animationData: JSON.parse($lottie.getAttribute('data-animationdata')),
            renderer: $lottie.getAttribute('data-renderer') || 'svg',
            loop: JSON.parse($lottie.getAttribute('data-loop')) || false,
            autoplay: JSON.parse($lottie.getAttribute('data-autoplay')) || false,
            name: `${name}_animation`,
            container: $lottie,
            assetsPath: `${swag.template_directory_uri}/motions/${ name }/images/`,
            rendererSettings: {
                preserveAspectRatio: $lottie.getAttribute('data-preserveaspectratio') || 'xMinYMin slice',
            },
        };

        const animation = lottie.loadAnimation(params);

        window.addEventListener('resize', () => animation.resize());
    });
}

document.addEventListener('loaded', loadLottieAnimation);

loadLottieAnimation();