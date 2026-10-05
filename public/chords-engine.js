// Chords & Notes Engine for FloatDoc / Mr.C Launcher
(function(window) {
  // SVGs provided by user
  const SVGS = {
    // Acoustic Piano with stool removed, scaled to fill viewBox
    acousticPiano: `<svg viewBox="36 0 440 355" width="20" height="20" fill="currentColor">
      <path d="M475.297,297.363v-74.314c0-51.6-41.98-93.581-93.581-93.581h-86.348c-18.826,0-34.14-15.315-34.14-34.141 C261.228,42.764,218.464,0,165.901,0h-33.7C79.639,0,36.875,42.762,36.875,95.327v200.885c-0.151,0.837-0.242,1.693-0.242,2.575 v67.704c0,7.965,6.458,14.424,14.424,14.424h68.314h68.315h68.315h68.314h68.315h68.314c7.965,0,14.424-6.459,14.424-14.424 v-67.704C475.369,298.305,475.343,297.832,475.297,297.363z M104.947,352.065H65.48v-38.856h39.466V352.065z M173.262,352.065 h-39.468v-38.856h39.468V352.065z M241.577,352.065h-39.468v-38.856h39.468V352.065z M309.891,352.065h-39.466v-38.856h39.466 V352.065z M378.206,352.065h-39.468v-38.856h39.468V352.065z M324.314,284.363h-68.314h-68.315H119.37H65.723V257.66h276.273 c7.965,0,14.424-6.459,14.424-14.424c0-7.965-6.459-14.424-14.424-14.424H65.723V95.327c0-36.657,29.823-66.479,66.479-66.479 h33.7c36.657,0,66.479,29.823,66.479,66.479c0,34.732,28.256,62.989,62.987,62.989h86.348c35.694,0,64.734,29.039,64.734,64.734 v61.314H392.63H324.314z M407.053,352.067V313.21h39.466v38.856H407.053z"/>
      <path d="M399.4,240.417c-0.173-0.923-0.462-1.832-0.822-2.697c-0.361-0.865-0.808-1.702-1.327-2.494 c-0.519-0.779-1.125-1.53-1.789-2.194c-0.663-0.663-1.399-1.269-2.192-1.789c-0.779-0.518-1.615-0.966-2.495-1.327 c-0.865-0.361-1.773-0.633-2.697-0.821c-1.859-0.376-3.763-0.376-5.624,0c-0.923,0.188-1.833,0.46-2.697,0.821 c-0.88,0.361-1.716,0.809-2.495,1.327c-0.793,0.519-1.529,1.125-2.192,1.789c-0.663,0.664-1.269,1.414-1.789,2.194 c-0.534,0.793-0.966,1.63-1.327,2.494c-0.361,0.867-0.649,1.774-0.822,2.697c-0.188,0.938-0.287,1.875-0.287,2.813 c0,0.952,0.1,1.89,0.287,2.827c0.172,0.922,0.462,1.83,0.822,2.697c0.361,0.865,0.793,1.702,1.327,2.494 c0.519,0.779,1.125,1.53,1.789,2.194c0.663,0.664,1.399,1.269,2.192,1.789c0.779,0.518,1.615,0.966,2.495,1.327 c0.865,0.361,1.774,0.633,2.697,0.821c0.923,0.188,1.875,0.288,2.813,0.288c0.936,0,1.89-0.101,2.811-0.288 c0.925-0.188,1.833-0.46,2.697-0.821c0.88-0.361,1.716-0.809,2.495-1.327c0.793-0.519,1.529-1.125,2.192-1.789 s1.269-1.414,1.789-2.194c0.519-0.793,0.966-1.63,1.327-2.494c0.361-0.867,0.649-1.774,0.822-2.697 c0.188-0.938,0.289-1.875,0.289-2.827C399.689,242.292,399.588,241.354,399.4,240.417z"/>
    </svg>`,

    // Electric Piano (Rhodes Style)
    electricPiano: `<svg viewBox="0 25 512 470" width="20" height="20" fill="currentColor">
      <path d="M498.266,30.18h-70.018h-68.152h-68.212h-69.958h-68.212H83.754h-70.02C6.149,30.18,0,36.33,0,43.914V169.99 c0,7.584,6.149,13.734,13.734,13.734h68.683l153.353,141.8l-104.92,97.017c-5.569,5.149-5.91,13.838-0.76,19.407 c2.707,2.928,6.392,4.41,10.088,4.41c3.335,0,6.679-1.207,9.321-3.651l106.501-98.478l106.501,98.478 c2.642,2.443,5.985,3.651,9.32,3.651c3.696,0,7.381-1.482,10.088-4.41c5.15-5.569,4.81-14.259-0.76-19.407l-104.92-97.017 l153.353-141.8h68.683c7.584,0,13.734-6.15,13.734-13.734V43.914C512,36.328,505.85,30.18,498.266,30.18z M373.828,57.648h40.684 v32.961h-40.684V57.648z M305.616,57.648h40.745v32.961h-40.745V57.648z M235.658,57.648h42.49v32.961h-42.49V57.648z M167.446,57.648h40.744v32.961h-40.744V57.648z M97.488,57.648h42.49v32.961h-42.49V57.648z M255.999,306.818L122.875,183.722 h266.249L255.999,306.818z M27.468,156.255V57.648H70.02v46.695v0.515c0,7.584,6.149,13.734,13.734,13.734h344.493 c7.584,0,13.734-6.15,13.734-13.734v-0.515V57.648h42.55v98.607H27.468z"/>
      <path d="M111.548,458.389l-0.22-0.22c-5.356-5.371-14.053-5.385-19.423-0.029c-5.373,5.355-5.385,14.051-0.03,19.424l0.22,0.22 c2.684,2.69,6.205,4.036,9.726,4.036c3.508,0,7.017-1.336,9.696-4.008C116.891,472.458,116.903,463.762,111.548,458.389z"/>
      <path d="M420.08,458.124c-5.381-5.344-14.077-5.319-19.424,0.059l-0.218,0.22c-5.348,5.381-5.32,14.076,0.059,19.424 c2.679,2.662,6.18,3.992,9.682,3.992c3.528,0,7.058-1.351,9.741-4.052l0.218-0.22C425.487,472.167,425.46,463.472,420.08,458.124z"/>
    </svg>`,

    // Acoustic Guitar
    guitar: `<svg viewBox="100 0 312 512" width="16" height="16" fill="currentColor">
      <path d="M370.181,322.382c-2.244-4.074-2.963-8.818-2.021-13.357c2.992-14.417,4.355-31.757,4.355-41.769 c0-46.607-28.435-83.045-74.759-96.742V90.852c6.253-1.383,10.933-6.951,10.933-13.62V59.467 c6.997-0.755,12.446-6.676,12.446-13.872c0-7.196-5.449-13.117-12.446-13.872V13.957C308.689,6.25,302.439,0,294.732,0h-77.464 c-7.707,0-13.957,6.25-13.957,13.957v17.765c-6.997,0.755-12.446,6.676-12.446,13.872c0,7.196,5.449,13.117,12.446,13.872v17.765 c0,6.667,4.68,12.236,10.933,13.62v79.654c-46.407,13.673-74.759,49.881-74.759,96.749c0,10.012,1.364,27.352,4.353,41.768 c0.942,4.54,0.225,9.283-2.021,13.36c-12.189,22.124-20.379,55.458-20.379,82.952c0,35.771,14.326,64.427,41.43,82.871 C185.745,503.771,217.949,512,256,512s70.255-8.229,93.132-23.796c27.104-18.443,41.43-47.099,41.43-82.871 C390.561,377.841,382.372,344.505,370.181,322.382z M231.226,27.915h49.549v35.36h-49.549V27.915z M269.842,91.189v247.511 h-27.683V91.189H269.842z M333.427,465.127c-18.227,12.403-45,18.958-77.427,18.958c-32.427,0-59.2-6.556-77.427-18.958 c-14.653-9.971-23.686-23.38-27.341-40.678h136.27c7.707,0,13.957-6.25,13.957-13.957s-6.25-13.957-13.957-13.957h-137.83 c1.467-21.014,7.882-44.868,16.595-60.683c5.456-9.904,7.198-21.447,4.905-32.503c-2.475-11.934-3.771-27.19-3.771-36.095 c0-31.489,17.207-55.714,46.844-67.286v152.689c0,7.707,6.25,13.957,13.957,13.957H283.8c7.707,0,13.957-6.25,13.957-13.957 V199.927c29.969,11.544,46.844,35.464,46.844,67.326c0,8.905-1.297,24.163-3.771,36.097c-2.295,11.056-0.553,22.598,4.905,32.5 c9.959,18.075,16.914,46.647,16.914,69.481C362.646,432.189,353.089,451.747,333.427,465.127z"/>
      <path d="M343.052,407.772c-0.167-0.892-0.447-1.771-0.796-2.624c-0.349-0.837-0.782-1.647-1.27-2.401 c-0.516-0.768-1.103-1.479-1.745-2.122c-0.642-0.642-1.354-1.23-2.122-1.745c-0.754-0.503-1.563-0.921-2.402-1.27 c-0.85-0.349-1.729-0.628-2.624-0.796c-1.8-0.363-3.641-0.363-5.457,0c-0.879,0.167-1.759,0.447-2.609,0.796 c-0.839,0.349-1.648,0.768-2.402,1.27c-0.768,0.515-1.479,1.103-2.122,1.745c-0.642,0.642-1.228,1.354-1.745,2.122 c-0.49,0.754-0.921,1.563-1.27,2.401c-0.349,0.851-0.628,1.731-0.796,2.624c-0.181,0.895-0.279,1.816-0.279,2.722 c0,0.907,0.098,1.83,0.279,2.722c0.167,0.893,0.447,1.774,0.796,2.61c0.349,0.851,0.782,1.66,1.284,2.413 c0.503,0.769,1.089,1.481,1.731,2.123c0.642,0.642,1.354,1.228,2.122,1.731c0.754,0.501,1.563,0.935,2.402,1.284 c0.85,0.349,1.729,0.613,2.609,0.794c0.907,0.183,1.83,0.279,2.736,0.279c0.907,0,1.83-0.096,2.722-0.279 c0.895-0.181,1.774-0.445,2.624-0.794c0.839-0.349,1.648-0.783,2.402-1.284c0.768-0.502,1.479-1.089,2.122-1.731 c0.642-0.642,1.228-1.354,1.731-2.123c0.502-0.754,0.935-1.562,1.284-2.413c0.349-0.837,0.628-1.717,0.796-2.61 c0.181-0.893,0.278-1.814,0.278-2.722C343.33,409.587,343.234,408.665,343.052,407.772z"/>
    </svg>`,

    // Ukulele
    ukulele: `<svg viewBox="100 0 312 512" width="16" height="16" fill="currentColor">
      <path d="M378.497,308.375c4.43-13.202,6.671-26.957,6.671-40.999c0-53.417-32.891-93.975-86.668-108.171V63.751h5.903 c7.823,0,14.167-6.343,14.167-14.167s-6.344-14.167-14.167-14.167h-5.903v-21.25C298.501,6.343,292.157,0,284.334,0h-56.668 c-7.823,0-14.167,6.343-14.167,14.167v21.25h-5.903c-7.823,0-14.167,6.343-14.167,14.167s6.344,14.167,14.167,14.167h5.903v95.454 c-53.776,14.195-86.668,54.754-86.668,108.171c0,14.044,2.241,27.798,6.671,40.999c-17.631,25.146-26.907,54.539-26.907,85.499 c0,39.6,15.84,71.308,45.808,91.701C177.808,502.864,213.631,512,256,512s78.192-9.138,103.597-26.424 c29.967-20.392,45.807-52.102,45.807-91.701C405.405,362.914,396.128,333.522,378.497,308.375z M241.833,28.334h28.334v7.083 h-28.334V28.334z M270.167,63.751v106.789v92.162c-0.221-0.05-0.446-0.084-0.669-0.13c-0.527-0.112-1.058-0.21-1.59-0.309 c-0.564-0.105-1.126-0.214-1.694-0.303c-0.605-0.096-1.217-0.173-1.828-0.252c-0.506-0.065-1.011-0.14-1.52-0.194 c-0.727-0.076-1.461-0.128-2.193-0.181c-0.405-0.03-0.809-0.071-1.216-0.092c-1.146-0.061-2.298-0.095-3.458-0.095 c-1.16,0-2.313,0.034-3.458,0.095c-0.407,0.021-0.809,0.064-1.214,0.092c-0.734,0.052-1.468,0.103-2.194,0.181 c-0.509,0.054-1.013,0.128-1.52,0.194c-0.611,0.079-1.223,0.156-1.829,0.252c-0.567,0.091-1.129,0.198-1.693,0.303 c-0.531,0.099-1.063,0.197-1.59,0.309c-0.222,0.047-0.448,0.081-0.669,0.13v-92.162V63.751H270.167z M236.486,295.182 c0.295-0.188,0.591-0.377,0.891-0.557c0.363-0.217,0.73-0.429,1.101-0.633c0.322-0.177,0.646-0.344,0.972-0.511 c0.555-0.285,1.118-0.557,1.69-0.813c0.354-0.159,0.71-0.317,1.07-0.465c0.35-0.143,0.7-0.283,1.055-0.417 c0.523-0.196,1.05-0.378,1.581-0.55c0.357-0.115,0.717-0.222,1.08-0.326c0.51-0.146,1.021-0.285,1.537-0.409 c0.276-0.067,0.554-0.132,0.833-0.193c0.73-0.157,1.464-0.3,2.203-0.414c0.126-0.02,0.255-0.031,0.383-0.048 c0.677-0.095,1.359-0.17,2.044-0.228c0.22-0.018,0.438-0.035,0.657-0.05c0.802-0.052,1.608-0.089,2.418-0.089 c0.81,0,1.615,0.037,2.417,0.089c0.22,0.014,0.439,0.031,0.657,0.05c0.686,0.057,1.367,0.133,2.044,0.228 c0.128,0.018,0.256,0.03,0.383,0.048c0.741,0.112,1.473,0.256,2.203,0.414c0.279,0.061,0.557,0.126,0.833,0.193 c0.516,0.125,1.029,0.262,1.537,0.409c0.361,0.105,0.723,0.211,1.08,0.327c0.531,0.171,1.057,0.354,1.58,0.55 c0.354,0.133,0.707,0.273,1.055,0.417c0.36,0.147,0.714,0.305,1.068,0.463c0.571,0.256,1.135,0.528,1.69,0.813 c0.326,0.167,0.65,0.334,0.972,0.511c0.371,0.205,0.738,0.417,1.101,0.633c0.3,0.18,0.595,0.368,0.891,0.557 c10.12,6.463,16.849,17.787,16.849,30.659c0,20.049-16.312,36.362-36.362,36.362s-36.361-16.313-36.361-36.362 C219.638,312.968,226.367,301.646,236.486,295.182z M256,483.666c-45.217,0-121.071-11.665-121.071-89.792 c0-27.264,8.878-53.026,25.676-74.5c3.127-3.998,3.876-9.362,1.965-14.064c-4.913-12.086-7.405-24.849-7.405-37.935 c0-37.841,21.483-66.299,58.334-78.625v88.374c-13.586,11.869-22.195,29.3-22.195,48.715c0,35.674,29.022,64.696,64.696,64.696 s64.696-29.022,64.696-64.696c0-19.414-8.609-36.847-22.195-48.715v-88.374c36.851,12.327,58.334,40.784,58.334,78.625 c0,13.086-2.492,25.85-7.405,37.935c-1.913,4.702-1.162,10.066,1.965,14.064c16.798,21.474,25.676,47.235,25.676,74.5 C377.071,472.001,301.217,483.666,256,483.666z"/>
      <path d="M287.825,411.314h-106.15c-7.823,0-14.167,6.343-14.167,14.167c0,7.824,6.344,14.167,14.167,14.167h106.15 c7.823,0,14.167-6.343,14.167-14.167C301.992,417.656,295.648,411.314,287.825,411.314z"/>
      <path d="M344.216,422.717c-0.183-0.907-0.452-1.799-0.806-2.649c-0.354-0.864-0.795-1.686-1.303-2.451 c-0.524-0.779-1.105-1.502-1.771-2.153c-0.653-0.652-1.376-1.247-2.155-1.757c-0.765-0.51-1.587-0.949-2.437-1.303 c-0.864-0.354-1.757-0.623-2.649-0.808c-1.828-0.368-3.712-0.368-5.539,0c-0.907,0.184-1.799,0.453-2.649,0.808 c-0.863,0.354-1.684,0.793-2.449,1.303c-0.781,0.51-1.503,1.105-2.155,1.757s-1.247,1.374-1.757,2.153 c-0.509,0.765-0.949,1.587-1.303,2.451c-0.354,0.85-0.622,1.743-0.806,2.649c-0.184,0.907-0.283,1.842-0.283,2.763 s0.099,1.856,0.283,2.777c0.184,0.893,0.452,1.785,0.806,2.649c0.354,0.85,0.795,1.672,1.303,2.437 c0.51,0.779,1.105,1.502,1.757,2.153s1.374,1.247,2.155,1.771c0.765,0.51,1.587,0.949,2.449,1.303 c0.851,0.34,1.743,0.623,2.649,0.807c0.907,0.17,1.842,0.269,2.763,0.269c0.935,0,1.856-0.099,2.777-0.269 c0.893-0.184,1.785-0.467,2.649-0.807c0.85-0.354,1.672-0.793,2.437-1.303c0.779-0.524,1.502-1.119,2.155-1.771 c0.666-0.652,1.247-1.374,1.771-2.153c0.509-0.765,0.949-1.587,1.303-2.437c0.354-0.864,0.622-1.757,0.806-2.649 c0.184-0.921,0.269-1.856,0.269-2.777S344.399,423.624,344.216,422.717z"/>
    </svg>`,

    // Bass
    bass: `<svg viewBox="70 0 375 512" width="16" height="16" fill="currentColor">
      <path d="M396.727,262.864c-25.77,0-46.737,20.966-46.737,46.737v85.061l-23.796-66.129l19.138-66.2 c3.05-10.55,0.452-21.689-6.954-29.8c-7.404-8.109-18.265-11.707-29.048-9.628l-34.486,6.659V122.518l15.463-87.441 c1.542-8.72-0.838-17.613-6.53-24.4S269.745,0,260.891,0h-41.479c-8.856,0-17.199,3.891-22.889,10.678 c-5.69,6.787-8.071,15.678-6.53,24.4l15.463,87.441v88.79l-42.258-24.924c-12.624-7.447-28.067-6.206-39.342,3.161 c-11.274,9.368-15.323,24.321-10.316,38.097l36.77,101.154L73.268,460.353c-7.1,12.122-6.146,27.143,2.429,38.27 C82.316,507.211,92.336,512,102.787,512c3.087,0,6.211-0.418,9.298-1.279l130.647-36.476l87.751,33.656 c12.681,4.863,26.581,1.98,36.282-7.521c6.957-6.814,10.534-15.862,10.315-25.147c0.072-0.567,0.122-1.143,0.122-1.729V309.599 c0-10.766,8.76-19.525,19.525-19.525s19.525,8.758,19.525,19.525v64.615c0,7.515,6.093,13.606,13.606,13.606 c7.513,0,13.606-6.091,13.606-13.606v-64.615C443.462,283.829,422.496,262.864,396.727,262.864z M217.37,28.165 c0.365-0.434,1.012-0.952,2.04-0.952h41.479c1.027,0,1.675,0.517,2.04,0.952c0.366,0.434,0.762,1.163,0.582,2.174l-13.684,77.376 H230.47l-13.684-77.376C216.61,29.328,217.006,28.599,217.37,28.165z M247.633,134.927v111.118v78.687h-14.967V235.13V134.927 H247.633z M347.723,480.939c-0.976,0.956-3.661,3.027-7.496,1.554l-91.95-35.267c-2.728-1.045-5.719-1.185-8.532-0.401 L104.766,484.51c-4.163,1.158-6.64-1.362-7.515-2.499c-0.878-1.137-2.682-4.185-0.502-7.906l29.159-49.793h110.819 c7.513,0,13.606-6.091,13.606-13.606c0-7.515-6.093-13.606-13.606-13.606h-94.883l35.177-60.068 c2.046-3.494,2.43-7.717,1.048-11.524l-38.956-107.161c-1.537-4.229,0.978-6.913,2.131-7.871c0.762-0.633,2.373-1.713,4.498-1.713 c1.091,0,2.316,0.284,3.63,1.06l56.081,33.078v83.476h-1.361c-7.513,0-13.606,6.091-13.606,13.606 c0,7.515,6.093,13.606,13.606,13.606h72.112c7.513,0,13.606-6.091,13.606-13.606c0-7.515-6.093-13.606-13.606-13.606h-1.361 v-69.101l39.644-7.653c1.961-0.376,3.218,0.625,3.795,1.257s1.461,1.978,0.908,3.893l-20.364,70.439 c-0.796,2.754-0.703,5.689,0.268,8.385l50.336,139.883C350.821,477.34,348.7,479.982,347.723,480.939z"/>
      <path d="M290.878,408.047c-0.162-0.871-0.434-1.729-0.774-2.544c-0.34-0.816-0.763-1.606-1.252-2.354 c-0.49-0.735-1.061-1.429-1.687-2.055c-3.157-3.17-7.864-4.612-12.274-3.728c-0.871,0.177-1.728,0.435-2.558,0.776 c-0.816,0.34-1.606,0.762-2.34,1.252c-0.748,0.503-1.442,1.061-2.068,1.701c-0.627,0.626-1.199,1.32-1.701,2.055 c-0.478,0.748-0.898,1.537-1.238,2.354c-0.34,0.816-0.612,1.674-0.776,2.544c-0.177,0.884-0.272,1.769-0.272,2.653 c0,0.898,0.095,1.782,0.272,2.667c0.163,0.871,0.435,1.728,0.776,2.544c0.34,0.816,0.762,1.606,1.238,2.354 c0.502,0.735,1.074,1.442,1.701,2.068c0.626,0.626,1.32,1.197,2.068,1.687c0.735,0.49,1.524,0.912,2.34,1.252 c0.83,0.34,1.687,0.599,2.558,0.776c0.872,0.177,1.77,0.258,2.653,0.258c3.578,0,7.089-1.442,9.62-3.973 c2.531-2.544,3.987-6.041,3.987-9.633C291.15,409.816,291.057,408.931,290.878,408.047z"/>
    </svg>`
  };

  // Multitrack Sample Hosting Domain
  const BASE_URL = "https://multitrack-hosting.web.app";

  class SampleManager {
    constructor(engine, baseUrl) {
      this.engine = engine;
      this.baseUrl = baseUrl;
      this.manifest = null;
      this.manifestPromise = null;
      this.manifestFailedAt = null;

      // Structured storage for indexed instrument samples
      this.pitched = {
        piano: [],
        rhodes: [],
        bass: []
      };

      // Decoded AudioBuffer cache: url -> AudioBuffer
      this.bufferCache = new Map();
      this.loadingPromises = new Map();
      this.isPreloaded = false;
    }

    /**
     * Helper function to convert note names (e.g., "C4", "A#3", "Eb2") to MIDI note numbers.
     */
    noteToMidi(noteName) {
      const notes = {
        C: 0, 'C#': 1, DB: 1, D: 2, 'D#': 3, EB: 3, E: 4, F: 5, 'F#': 6, GB: 6, G: 7, 'G#': 8, AB: 8, A: 9, 'A#': 10, BB: 10, B: 11
      };
      const match = noteName.match(/^([A-Ga-g][#b]?)(-?\d+)$/);
      if (!match) return null;

      const note = match[1].toUpperCase();
      const octave = parseInt(match[2], 10);
      if (notes[note] === undefined) return null;
      return (octave + 1) * 12 + notes[note];
    }

    /**
     * Fetches and indexes the sample manifest.
     */
    async ensureManifest() {
      if (this.manifest) return true;

      if (!this.manifestPromise) {
        this.manifestPromise = (async () => {
          try {
            const response = await fetch(`${this.baseUrl}/manifest.json`);
            if (!response.ok) return false;

            const data = await response.json();
            if (Array.isArray(data?.samples)) {
              this.manifest = data.samples;
              this.indexSamples();
              return true;
            }
            return false;
          } catch (error) {
            console.error("Failed to load sample manifest:", error);
            return false;
          }
        })().then(success => {
          this.manifestFailedAt = success ? null : Date.now();
          if (success) {
            this.preloadLibrary();
          }
          return success;
        }).finally(() => {
          this.manifestPromise = null;
        });
      }

      return this.manifestPromise;
    }

    /**
     * Retries loading the manifest if enough time has passed since a failure.
     */
    retryManifestSoon(cooldownMs = 5000) {
      if (!this.manifestFailedAt || Date.now() - this.manifestFailedAt >= cooldownMs) {
        this.ensureManifest();
      }
    }

    /**
     * Indexes all samples from the manifest into target instrument categories.
     */
    indexSamples() {
      if (!this.manifest) return;

      // Reset pitch maps
      this.pitched.piano = [];
      this.pitched.rhodes = [];
      this.pitched.bass = [];

      const velocityMap = { PP: 0.2, MP: 0.45, MF: 0.7, FF: 1.0 };

      for (const sample of this.manifest) {
        const fileName = sample.path.split("/").pop() ?? "";

        // 1. Splendid Grand Piano (Acoustic Piano)
        if (sample.library === "splendid_grand_piano") {
          const match = /^(?:PP|Mp|MP|Mf|MF|FF) ([A-G]#?-?\d+)\.mp3$/i.exec(fileName);
          if (match) {
            const midiPitch = this.noteToMidi(match[1]);
            const dynamicMarking = fileName.split(" ")[0].toUpperCase();
            const velocity = velocityMap[dynamicMarking] ?? 0.7;

            if (midiPitch !== null) {
              this.pitched.piano.push({
                sample,
                midi: midiPitch + 12, // Transposed up 1 octave
                layer: velocity
              });
            }
          }
        } 
        // 2. jRhodes3d (Fender Rhodes Electric Piano)
        else if (sample.library === "jrhodes3d" && sample.group === "jRhodes3d-st") {
          // Example filename match: A_060__name_1-ST.mp3
          const match = /^A_(\d{3})__[^_]+_(\d+)(?:-ST)?\.mp3$/i.exec(fileName);
          if (match) {
            const midiPitch = Number(match[1]);
            const velocityLayer = (6 - Number(match[2])) / 5; // Normalizes velocity layers (1-5) to 0.2 - 1.0

            this.pitched.rhodes.push({
              sample,
              midi: midiPitch,
              layer: velocityLayer
            });
          }
        } 
        // 3. Baby Blue Bass
        else if (sample.library === "babyblue" && sample.group === "reg") {
          const match = /^babyblue_([a-g][b#]?\d)_/i.exec(fileName);
          if (match) {
            const midiPitch = this.noteToMidi(match[1]);
            if (midiPitch !== null) {
              this.pitched.bass.push({
                sample,
                midi: midiPitch - 12 // Transposed down 1 octave
              });
            }
          }
        }
      }

      console.log(`[SampleManager] Ready: Piano=${this.pitched.piano.length}, Rhodes=${this.pitched.rhodes.length}, Bass=${this.pitched.bass.length}`);
    }

    /**
     * Finds best matching sample for an instrument, pitch, and velocity.
     */
    findBestSample(instrument, midiPitch, targetVelocity = 0.7) {
      const list = this.pitched[instrument];
      if (!list || list.length === 0) return null;

      let best = null;
      let minPitchDiff = Infinity;
      let minLayerDiff = Infinity;

      for (const item of list) {
        const pitchDiff = Math.abs(item.midi - midiPitch);
        const layerDiff = item.layer !== undefined ? Math.abs(item.layer - targetVelocity) : 0;

        if (pitchDiff < minPitchDiff || (pitchDiff === minPitchDiff && layerDiff < minLayerDiff)) {
          minPitchDiff = pitchDiff;
          minLayerDiff = layerDiff;
          best = item;
        }
      }

      return best;
    }

    /**
     * Builds properly URL-encoded sample URL, preventing unencoded # character from breaking HTTP requests
     */
    getSampleUrl(sampleObj) {
      if (!sampleObj || !sampleObj.path) return '';
      const parts = sampleObj.path.split('/').map(part => encodeURIComponent(part));
      return `${this.baseUrl}/${parts.join('/')}`;
    }

    /**
     * Gets CDN URL for classical nylon guitar soundfont (FluidR3_GM)
     */
    getNylonGuitarUrl(midiNote) {
      const noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
      const clampedMidi = Math.max(36, Math.min(84, midiNote));
      const name = noteNames[clampedMidi % 12];
      const oct = Math.floor(clampedMidi / 12) - 1;
      return `https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts@gh-pages/FluidR3_GM/acoustic_guitar_nylon-mp3/${name}${oct}.mp3`;
    }

    async loadNylonGuitarBuffer(midiNote) {
      const url = this.getNylonGuitarUrl(midiNote);
      if (this.bufferCache.has(url)) return this.bufferCache.get(url);
      if (this.loadingPromises.has(url)) return this.loadingPromises.get(url);

      const promise = (async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const arrayBuffer = await res.arrayBuffer();
          const ctx = this.engine.ensureContext();
          const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
          this.bufferCache.set(url, audioBuffer);
          return audioBuffer;
        } catch (e) {
          return null;
        } finally {
          this.loadingPromises.delete(url);
        }
      })();

      this.loadingPromises.set(url, promise);
      return promise;
    }

    /**
     * Preloads common 2-octave range, bass notes, and guitar notes for instant response
     */
    async preloadLibrary() {
      if (this.isPreloaded) return;
      this.isPreloaded = true;
      // Preload all 25 keys of the 2-octave piano keyboard (MIDI 48 to 72)
      for (let m = 48; m <= 72; m++) {
        const pSample = this.findBestSample('piano', m);
        if (pSample) this.loadAudioBuffer(pSample.sample);
        const rSample = this.findBestSample('rhodes', m);
        if (rSample) this.loadAudioBuffer(rSample.sample);
      }
      // Preload bass notes (E1 to G2)
      for (let b = 28; b <= 45; b++) {
        const bSample = this.findBestSample('bass', b);
        if (bSample) this.loadAudioBuffer(bSample.sample);
      }
      // Preload common guitar/ukulele chord notes (E2 to A4)
      for (const gm of [40, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72]) {
        this.loadNylonGuitarBuffer(gm);
      }
    }

    /**
     * Loads and decodes an AudioBuffer, caching it.
     */
    async loadAudioBuffer(sampleObj) {
      if (!sampleObj || !sampleObj.path) return null;
      const url = this.getSampleUrl(sampleObj);
      if (this.bufferCache.has(url)) {
        return this.bufferCache.get(url);
      }
      if (this.loadingPromises.has(url)) {
        return this.loadingPromises.get(url);
      }

      const promise = (async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const arrayBuffer = await res.arrayBuffer();
          const ctx = this.engine.ensureContext();
          const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
          this.bufferCache.set(url, audioBuffer);
          return audioBuffer;
        } catch (e) {
          console.warn("[SampleManager] Failed to load sample:", url, e);
          return null;
        } finally {
          this.loadingPromises.delete(url);
        }
      })();

      this.loadingPromises.set(url, promise);
      return promise;
    }
  }

  // Audio synthesizer & sample engine
  class ChordsAudioEngine {
    constructor() {
      this.ctx = null;
      this.soundType = 'acoustic'; // 'acoustic' | 'rhodes'
      this.sampleManager = new SampleManager(this, BASE_URL);
      this.activeSources = new Set();
      this.activeVoices = new Map();

      // Trigger manifest download in background
      this.sampleManager.ensureManifest();

      // Immediately preload classical nylon guitar / ukulele notes in background
      const commonPlucks = [40, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76];
      for (const gm of commonPlucks) {
        this.sampleManager.loadNylonGuitarBuffer(gm);
      }
    }

    ensureContext() {
      if (!this.ctx || this.ctx.state === 'closed') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }

    setSoundType(type) {
      this.soundType = type;
    }

    startNote(midiNote, velocity = 0.8, instrument = null) {
      const ctx = this.ensureContext();
      const targetInst = instrument || (this.soundType === 'rhodes' ? 'rhodes' : 'piano');
      const now = ctx.currentTime;

      // Stop existing voice on this pitch if any
      this.stopNote(midiNote, 0.02);

      // 1. Classical Nylon Guitar / Ukulele (FluidR3_GM)
      if (targetInst === 'guitar' || targetInst === 'ukulele') {
        const url = this.sampleManager.getNylonGuitarUrl(midiNote);
        const cachedBuffer = this.sampleManager.bufferCache.get(url);
        if (cachedBuffer) {
          try {
            const src = ctx.createBufferSource();
            src.buffer = cachedBuffer;

            const gain = ctx.createGain();
            const gainLevel = velocity * (targetInst === 'ukulele' ? 1.35 : 1.40);
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.linearRampToValueAtTime(gainLevel, now + 0.008);

            if (targetInst === 'ukulele') {
              // Ukulele acoustic voicing: small body resonance and treble sparkle
              const hp = ctx.createBiquadFilter();
              hp.type = 'highpass';
              hp.frequency.setValueAtTime(175, now);

              const bp = ctx.createBiquadFilter();
              bp.type = 'peaking';
              bp.frequency.setValueAtTime(3200, now);
              bp.gain.setValueAtTime(3.0, now);

              src.connect(hp);
              hp.connect(bp);
              bp.connect(gain);
            } else {
              src.connect(gain);
            }

            gain.connect(ctx.destination);
            src.start(now);

            const voice = {
              midi: midiNote,
              source: src,
              gain: gain,
              stop: (releaseSec = 0.08) => {
                try {
                  const t = ctx.currentTime;
                  gain.gain.cancelScheduledValues(t);
                  gain.gain.setValueAtTime(gain.gain.value, t);
                  gain.gain.linearRampToValueAtTime(0.0001, t + releaseSec);
                  setTimeout(() => {
                    try { src.stop(); src.disconnect(); } catch (e) {}
                  }, (releaseSec + 0.05) * 1000);
                } catch (e) {}
              }
            };

            this.activeVoices.set(midiNote, voice);
            src.onended = () => {
              if (this.activeVoices.get(midiNote) === voice) {
                this.activeVoices.delete(midiNote);
              }
            };
            return voice;
          } catch (e) {
            console.warn("Guitar playback error:", e);
          }
        } else {
          this.sampleManager.loadNylonGuitarBuffer(midiNote);
        }
      }

      // 2. Multitrack Grand Piano, Rhodes, or Baby Blue Bass
      const best = this.sampleManager.findBestSample(targetInst, midiNote, velocity);

      if (best) {
        const url = this.sampleManager.getSampleUrl(best.sample);
        const cachedBuffer = this.sampleManager.bufferCache.get(url);

        if (cachedBuffer) {
          try {
            const src = ctx.createBufferSource();
            src.buffer = cachedBuffer;

            const semitoneShift = midiNote - best.midi;
            src.playbackRate.value = Math.pow(2, semitoneShift / 12);

            const gain = ctx.createGain();
            const gainLevel = velocity * (targetInst === 'bass' ? 0.85 : 0.62);
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.linearRampToValueAtTime(gainLevel, now + 0.016);

            let lastNode = src;
            if (targetInst === 'piano' || targetInst === 'rhodes') {
              const filter = ctx.createBiquadFilter();
              filter.type = 'lowpass';
              filter.frequency.setValueAtTime(targetInst === 'piano' ? 4400 : 5200, now);
              src.connect(filter);
              lastNode = filter;
            }

            lastNode.connect(gain);
            gain.connect(ctx.destination);
            src.start(now);

            const voice = {
              midi: midiNote,
              source: src,
              gain: gain,
              stop: (releaseSec = 0.08) => {
                try {
                  const t = ctx.currentTime;
                  gain.gain.cancelScheduledValues(t);
                  gain.gain.setValueAtTime(gain.gain.value, t);
                  gain.gain.linearRampToValueAtTime(0.0001, t + releaseSec);
                  setTimeout(() => {
                    try { src.stop(); src.disconnect(); } catch (e) {}
                  }, (releaseSec + 0.05) * 1000);
                } catch (e) {}
              }
            };

            this.activeVoices.set(midiNote, voice);
            src.onended = () => {
              if (this.activeVoices.get(midiNote) === voice) {
                this.activeVoices.delete(midiNote);
              }
            };
            return voice;
          } catch (e) {
            console.warn("Sample playback error:", e);
          }
        } else {
          this.sampleManager.loadAudioBuffer(best.sample);
        }
      }

      // 3. Fallback synthesizer with sustained envelope
      return this.startSynthFallback(midiNote, velocity, targetInst);
    }

    startSynthFallback(midiNote, velocity, targetInst) {
      const ctx = this.ensureContext();
      const freq = 440 * Math.pow(2, (midiNote - 69) / 12);
      const now = ctx.currentTime;

      const masterGain = ctx.createGain();
      const level = velocity * (targetInst === 'bass' ? 0.6 : 0.45);
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.linearRampToValueAtTime(level, now + 0.008);
      masterGain.connect(ctx.destination);

      let nodes = [];

      if (targetInst === 'bass') {
        const osc1 = ctx.createOscillator();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(freq, now);

        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq, now);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(380, now);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start(now);
        osc2.start(now);
        nodes = [osc1, osc2, filter];
      } else if (targetInst === 'guitar' || targetInst === 'ukulele') {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(targetInst === 'ukulele' ? 2400 : 1900, now);
        filter.frequency.exponentialRampToValueAtTime(350, now + 0.6);

        osc.connect(filter);
        filter.connect(masterGain);
        osc.start(now);
        nodes = [osc, filter];
      } else if (targetInst === 'acoustic' || targetInst === 'piano') {
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, now);

        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2, now);
        const g2 = ctx.createGain();
        g2.gain.value = 0.3;
        osc2.connect(g2);
        g2.connect(masterGain);

        osc1.connect(masterGain);
        osc1.start(now);
        osc2.start(now);
        nodes = [osc1, osc2, g2];
      } else {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const tine = ctx.createOscillator();
        tine.type = 'sine';
        tine.frequency.setValueAtTime(freq * 4, now);
        const tineGain = ctx.createGain();
        tineGain.gain.setValueAtTime(0.35, now);
        tineGain.exponentialRampToValueAtTime(0.0001, now + 0.15);
        tine.connect(tineGain);
        tineGain.connect(masterGain);

        osc.connect(masterGain);
        osc.start(now);
        tine.start(now);
        nodes = [osc, tine, tineGain];
      }

      const voice = {
        midi: midiNote,
        gain: masterGain,
        nodes: nodes,
        stop: (releaseSec = 0.08) => {
          try {
            const t = ctx.currentTime;
            masterGain.gain.cancelScheduledValues(t);
            masterGain.gain.setValueAtTime(masterGain.gain.value, t);
            masterGain.gain.linearRampToValueAtTime(0.0001, t + releaseSec);
            setTimeout(() => {
              nodes.forEach(n => {
                try { if (n.stop) n.stop(); n.disconnect(); } catch (e) {}
              });
              try { masterGain.disconnect(); } catch (e) {}
            }, (releaseSec + 0.05) * 1000);
          } catch (e) {}
        }
      };

      this.activeVoices.set(midiNote, voice);
      return voice;
    }

    stopNote(midiNote, releaseSec = 0.08) {
      const voice = this.activeVoices.get(midiNote);
      if (voice) {
        voice.stop(releaseSec);
        this.activeVoices.delete(midiNote);
      }
    }

    playNote(midiNote, duration = 1.0, velocity = 0.8, instrument = null) {
      this.startNote(midiNote, velocity, instrument);
      setTimeout(() => {
        this.stopNote(midiNote, 0.1);
      }, duration * 1000);
    }

    playBass(rootName, duration = 1.0) {
      if (!rootName) return null;
      const cleanRoot = rootName.trim().toUpperCase();
      const bassMidi = this.sampleManager.noteToMidi(cleanRoot + '2') || 36;
      const voice = this.startNote(bassMidi, 0.9, 'bass');
      if (voice) {
        setTimeout(() => {
          try { voice.stop(0.08); } catch (e) {}
        }, duration * 1000);
      }
      return voice;
    }

    playChord(midiNotes, duration = 1.0, rootNoteName = null, instrument = 'rhodes') {
      if (!midiNotes || !midiNotes.length) return;
      this.stopAllVoices();

      const activeVoicesList = [];

      // 1. Bass note playing along with the chord
      if (rootNoteName) {
        const cleanRoot = rootNoteName.trim().toUpperCase();
        const bassMidi = this.sampleManager.noteToMidi(cleanRoot + '2') || 36;
        const bassVoice = this.startNote(bassMidi, 0.9, 'bass');
        if (bassVoice) activeVoicesList.push(bassVoice);
      }

      // 2. Chord notes (triggering Rhodes sound for chord preview)
      midiNotes.forEach((note, idx) => {
        setTimeout(() => {
          const v = this.startNote(note, 0.8, instrument);
          if (v) activeVoicesList.push(v);
        }, idx * 16);
      });

      // 3. Synchronized release: bass note releases together with the rhodes/piano
      setTimeout(() => {
        activeVoicesList.forEach(v => {
          try { v.stop(0.08); } catch (e) {}
        });
      }, duration * 1000);
    }

    playGuitarVoicing(chordObj) {
      if (!chordObj) return;
      this.stopAllVoices();
      const v = getGuitarVoicing(chordObj);
      const openStringsMidi = [40, 45, 50, 55, 59, 64]; // E2, A2, D3, G3, B3, E4
      const activeChordVoices = [];
      const duration = 1.3;

      let strumDelay = 0;
      v.frets.forEach((f, idx) => {
        if (typeof f === 'number') {
          const base = (v.baseFret && v.baseFret > 1) ? (v.baseFret - 1) : 0;
          const fret = f === 0 ? 0 : (f + base);
          const noteMidi = openStringsMidi[idx] + fret;
          setTimeout(() => {
            const voice = this.startNote(noteMidi, 0.78, 'guitar');
            if (voice) activeChordVoices.push(voice);
          }, strumDelay * 1000);
          strumDelay += 0.024; // natural acoustic strum delay
        }
      });

      setTimeout(() => {
        activeChordVoices.forEach(voice => {
          try { voice.stop(0.1); } catch (e) {}
        });
      }, duration * 1000);
    }

    playUkuleleVoicing(chordObj) {
      if (!chordObj) return;
      this.stopAllVoices();
      const v = getUkuleleVoicing(chordObj);
      const openStringsMidi = [67, 60, 64, 69]; // G4, C4, E4, A4 (standard re-entrant tuning)
      const activeChordVoices = [];
      const duration = 1.2;

      let strumDelay = 0;
      v.frets.forEach((f, idx) => {
        if (typeof f === 'number') {
          const base = (v.baseFret && v.baseFret > 1) ? (v.baseFret - 1) : 0;
          const fret = f === 0 ? 0 : (f + base);
          const noteMidi = openStringsMidi[idx] + fret;
          setTimeout(() => {
            const voice = this.startNote(noteMidi, 0.8, 'ukulele');
            if (voice) activeChordVoices.push(voice);
          }, strumDelay * 1000);
          strumDelay += 0.018; // ukulele strum delay
        }
      });

      setTimeout(() => {
        activeChordVoices.forEach(voice => {
          try { voice.stop(0.1); } catch (e) {}
        });
      }, duration * 1000);
    }

    stopAllVoices() {
      try {
        if (this.activeVoices) {
          this.activeVoices.forEach((voice) => {
            try { voice.stop(0.02); } catch (e) {}
          });
          this.activeVoices.clear();
        }
      } catch (e) {}
    }

    stopAll() {
      this.stopAllVoices();

      if (this.ctx && this.ctx.state !== 'closed') {
        try { this.ctx.close(); } catch(e) {}
        this.ctx = null;
      }
    }
  }

  const audio = new ChordsAudioEngine();

  // MIDI chromatic pitch data for 2 octaves (C3 to C5)
  // C3 is MIDI 48, C5 is MIDI 72
  const PIANO_WHITE_KEYS = [
    { note: 'C3', midi: 48, letter: 'C', oct: 3 },
    { note: 'D3', midi: 50, letter: 'D', oct: 3 },
    { note: 'E3', midi: 52, letter: 'E', oct: 3 },
    { note: 'F3', midi: 53, letter: 'F', oct: 3 },
    { note: 'G3', midi: 55, letter: 'G', oct: 3 },
    { note: 'A3', midi: 57, letter: 'A', oct: 3 },
    { note: 'B3', midi: 59, letter: 'B', oct: 3 },
    { note: 'C4', midi: 60, letter: 'C', oct: 4 },
    { note: 'D4', midi: 62, letter: 'D', oct: 4 },
    { note: 'E4', midi: 64, letter: 'E', oct: 4 },
    { note: 'F4', midi: 65, letter: 'F', oct: 4 },
    { note: 'G4', midi: 67, letter: 'G', oct: 4 },
    { note: 'A4', midi: 69, letter: 'A', oct: 4 },
    { note: 'B4', midi: 71, letter: 'B', oct: 4 },
    { note: 'C5', midi: 72, letter: 'C', oct: 5 }
  ];

  // 15 white keys => width = 100% / 15 = 6.6666%
  // Black keys placed across white key borders
  const PIANO_BLACK_KEYS = [
    { note: 'C#3', flat: 'D♭3', midi: 49, leftPercent: 4.3 },
    { note: 'D#3', flat: 'E♭3', midi: 51, leftPercent: 11.0 },
    { note: 'F#3', flat: 'G♭3', midi: 54, leftPercent: 24.3 },
    { note: 'G#3', flat: 'A♭3', midi: 56, leftPercent: 31.0 },
    { note: 'A#3', flat: 'B♭3', midi: 58, leftPercent: 37.6 },
    { note: 'C#4', flat: 'D♭4', midi: 61, leftPercent: 51.0 },
    { note: 'D#4', flat: 'E♭4', midi: 63, leftPercent: 57.6 },
    { note: 'F#4', flat: 'G♭4', midi: 66, leftPercent: 71.0 },
    { note: 'G#4', flat: 'A♭4', midi: 68, leftPercent: 77.6 },
    { note: 'A#4', flat: 'B♭4', midi: 70, leftPercent: 84.3 }
  ];

  // Web MIDI Handler
  let midiAccess = null;
  let isModalActive = false;

  function setupWebMidi(onNoteOn, onNoteOff) {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({ sysex: false })
        .then(access => {
          midiAccess = access;
          const statusDot = document.getElementById('midiDot');
          if (statusDot) statusDot.classList.add('connected');
          const statusText = document.getElementById('midiText');
          if (statusText) statusText.textContent = 'MIDI Connected';

          access.inputs.forEach(input => {
            input.onmidimessage = (event) => {
              if (!isModalActive) return;
              const [status, note, velocity] = event.data;
              const cmd = status >> 4;
              if (cmd === 9 && velocity > 0) {
                onNoteOn(note, velocity);
              } else if (cmd === 8 || (cmd === 9 && velocity === 0)) {
                onNoteOff(note);
              }
            };
          });
        })
        .catch(() => {});
    }
  }

  // Chord Parser & Voicings Data
  const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const ENHARMONIC_MAP = {
    'DB': 'C#', 'EB': 'D#', 'GB': 'F#', 'AB': 'G#', 'BB': 'A#',
    'B#': 'C', 'E#': 'F', 'CB': 'B', 'FB': 'E'
  };

  const CHORD_FORMULAS = {
    '': { name: 'Major', intervals: [0, 4, 7] },
    'MAJ': { name: 'Major', intervals: [0, 4, 7] },
    'MIN': { name: 'Minor', intervals: [0, 3, 7] },
    '-': { name: 'Minor', intervals: [0, 3, 7] },
    '7': { name: 'Dominant 7th', intervals: [0, 4, 7, 10] },
    'DOM7': { name: 'Dominant 7th', intervals: [0, 4, 7, 10] },
    'MAJ7': { name: 'Major 7th', intervals: [0, 4, 7, 11] },
    'MIN7': { name: 'Minor 7th', intervals: [0, 3, 7, 10] },
    '-7': { name: 'Minor 7th', intervals: [0, 3, 7, 10] },
    'DIM': { name: 'Diminished', intervals: [0, 3, 6] },
    'DIM7': { name: 'Diminished 7th', intervals: [0, 3, 6, 9] },
    'M7B5': { name: 'Half-Diminished', intervals: [0, 3, 6, 10] },
    'AUG': { name: 'Augmented', intervals: [0, 4, 8] },
    '+': { name: 'Augmented', intervals: [0, 4, 8] },
    'SUS4': { name: 'Suspended 4th', intervals: [0, 5, 7] },
    'SUS2': { name: 'Suspended 2nd', intervals: [0, 2, 7] },
    '7SUS4': { name: '7 Sus 4', intervals: [0, 5, 7, 10] },
    '6': { name: 'Major 6th', intervals: [0, 4, 7, 9] },
    'M6': { name: 'Minor 6th', intervals: [0, 3, 7, 9] },
    '9': { name: 'Dominant 9th', intervals: [0, 4, 7, 10, 14] },
    'MAJ9': { name: 'Major 9th', intervals: [0, 4, 7, 11, 14] },
    'M9': { name: 'Minor 9th', intervals: [0, 3, 7, 10, 14] },
    'ADD9': { name: 'Add 9', intervals: [0, 4, 7, 14] },
    '13': { name: 'Dominant 13th', intervals: [0, 4, 7, 10, 14, 21] }
  };

  function parseChord(rawStr) {
    if (!rawStr) return null;
    let [main, slashBass] = rawStr.split('/');
    main = main.trim();
    const match = main.match(/^([A-Ga-g])([#b♯♭]?)(.*)$/);
    if (!match) return null;

    let rootLetter = match[1].toUpperCase();
    let acc = match[2];
    if (acc === '♯') acc = '#';
    if (acc === '♭') acc = 'b';
    let root = rootLetter + acc;
    let rawQual = (match[3] || '').trim();

    const normRoot = ENHARMONIC_MAP[root.toUpperCase()] || root;
    const rootIdx = CHROMATIC_NOTES.indexOf(normRoot);
    if (rootIdx === -1) return null;

    let formula = null;
    // Interpret GM7 or C#M7 with capital 'M' as Major 7th (same as Gmaj7, C#maj7)
    if (rawQual === 'M7' || rawQual === 'Δ7' || rawQual === 'Δ' || /^maj7$/i.test(rawQual)) {
      formula = CHORD_FORMULAS['MAJ7'];
    } else if (rawQual === 'm7' || /^(min7|-7)$/i.test(rawQual)) {
      formula = { name: 'Minor 7th', intervals: [0, 3, 7, 10] };
    } else if (rawQual === 'M9' || /^maj9$/i.test(rawQual)) {
      formula = CHORD_FORMULAS['MAJ9'];
    } else if (rawQual === 'm9' || /^min9$/i.test(rawQual)) {
      formula = CHORD_FORMULAS['M9'];
    } else if (rawQual === 'M' || /^maj$/i.test(rawQual) || rawQual === '') {
      formula = CHORD_FORMULAS['MAJ'];
    } else if (rawQual === 'm' || /^(min|-)$/i.test(rawQual)) {
      formula = { name: 'Minor', intervals: [0, 3, 7] };
    } else {
      const upper = rawQual.toUpperCase();
      formula = CHORD_FORMULAS[upper] || CHORD_FORMULAS[''];
    }

    const tones = formula.intervals.map(int => CHROMATIC_NOTES[(rootIdx + int) % 12]);
    const midiNotes = formula.intervals.map(int => 48 + rootIdx + int);

    return {
      raw: rawStr,
      root: root,
      normRoot: normRoot,
      rootIdx: rootIdx,
      qualityName: formula.name,
      qualKey: rawQual,
      tones: Array.from(new Set(tones)),
      midiNotes: midiNotes,
      slashBass: slashBass ? slashBass.trim().toUpperCase() : null
    };
  }

  // Authentic Standard Guitar Voicings
  const GUITAR_DATABASE = {
    'C': { frets: ['X', 3, 2, 0, 1, 0], baseFret: 1 },
    'G': { frets: [3, 2, 0, 0, 0, 3], baseFret: 1 },
    'D': { frets: ['X', 'X', 0, 2, 3, 2], baseFret: 1 },
    'A': { frets: ['X', 0, 2, 2, 2, 0], baseFret: 1 },
    'E': { frets: [0, 2, 2, 1, 0, 0], baseFret: 1 },
    'Am': { frets: ['X', 0, 2, 2, 1, 0], baseFret: 1 },
    'Em': { frets: [0, 2, 2, 0, 0, 0], baseFret: 1 },
    'Dm': { frets: ['X', 'X', 0, 2, 3, 1], baseFret: 1 },
    'F': { frets: [1, 3, 3, 2, 1, 1], baseFret: 1 },
    'Bm': { frets: ['X', 2, 4, 4, 3, 2], baseFret: 2 },
    'Bbm': { frets: ['X', 1, 3, 3, 2, 1], baseFret: 1 },
    'Bbm7': { frets: ['X', 1, 3, 1, 2, 1], baseFret: 1 },
    'Bb': { frets: ['X', 1, 3, 3, 3, 1], baseFret: 1 },
    'Eb': { frets: ['X', 6, 5, 3, 4, 3], baseFret: 3 },
    'Ab': { frets: [4, 6, 6, 5, 4, 4], baseFret: 4 },
    'F#': { frets: [2, 4, 4, 3, 2, 2], baseFret: 2 },
    'F#m': { frets: [2, 4, 4, 2, 2, 2], baseFret: 2 },
    'F#m7b5': { frets: [2, 'X', 2, 2, 1, 'X'], baseFret: 2 },
    'C7': { frets: ['X', 3, 2, 3, 1, 0], baseFret: 1 },
    'G7': { frets: [3, 2, 0, 0, 0, 1], baseFret: 1 },
    'D7': { frets: ['X', 'X', 0, 2, 1, 2], baseFret: 1 },
    'A7': { frets: ['X', 0, 2, 0, 2, 0], baseFret: 1 },
    'E7': { frets: [0, 2, 0, 1, 0, 0], baseFret: 1 },
    'B7': { frets: ['X', 2, 1, 2, 0, 2], baseFret: 1 },
    'Cmaj7': { frets: ['X', 3, 2, 0, 0, 0], baseFret: 1 },
    'CM7': { frets: ['X', 3, 2, 0, 0, 0], baseFret: 1 },
    'Fmaj7': { frets: ['X', 'X', 3, 2, 1, 0], baseFret: 1 },
    'FM7': { frets: ['X', 'X', 3, 2, 1, 0], baseFret: 1 },
    'Gmaj7': { frets: [3, 2, 0, 0, 0, 2], baseFret: 1 },
    'GM7': { frets: [3, 2, 0, 0, 0, 2], baseFret: 1 },
    'C#maj7': { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4 },
    'C#M7': { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4 },
    'Dbmaj7': { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4 },
    'DbM7': { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4 },
    'Dmaj7': { frets: ['X', 'X', 0, 2, 2, 2], baseFret: 1 },
    'DM7': { frets: ['X', 'X', 0, 2, 2, 2], baseFret: 1 },
    'Amaj7': { frets: ['X', 0, 2, 1, 2, 0], baseFret: 1 },
    'AM7': { frets: ['X', 0, 2, 1, 2, 0], baseFret: 1 },
    'Emaj7': { frets: [0, 2, 1, 1, 0, 0], baseFret: 1 },
    'EM7': { frets: [0, 2, 1, 1, 0, 0], baseFret: 1 },
    'Bbmaj7': { frets: ['X', 1, 3, 2, 3, 1], baseFret: 1 },
    'BbM7': { frets: ['X', 1, 3, 2, 3, 1], baseFret: 1 },
    'Ebmaj7': { frets: ['X', 6, 5, 3, 3, 3], baseFret: 3 },
    'EbM7': { frets: ['X', 6, 5, 3, 3, 3], baseFret: 3 },
    'Abmaj7': { frets: [4, 'X', 5, 5, 4, 'X'], baseFret: 4 },
    'AbM7': { frets: [4, 'X', 5, 5, 4, 'X'], baseFret: 4 },
    'Dm7': { frets: ['X', 'X', 0, 2, 1, 1], baseFret: 1 },
    'Am7': { frets: ['X', 0, 2, 0, 1, 0], baseFret: 1 },
    'Em7': { frets: [0, 2, 0, 0, 0, 0], baseFret: 1 },
    'A13': { frets: [5, 'X', 5, 6, 7, 5], baseFret: 5 },
    'G13': { frets: [3, 'X', 3, 4, 5, 3], baseFret: 3 },
    'Cadd9': { frets: ['X', 3, 2, 0, 3, 0], baseFret: 1 },
    'Dsus4': { frets: ['X', 'X', 0, 2, 3, 3], baseFret: 1 },
    'Asus4': { frets: ['X', 0, 2, 2, 3, 0], baseFret: 1 }
  };

  // Authentic Standard Ukulele Voicings (G C E A)
  const UKULELE_DATABASE = {
    'C': { frets: [0, 0, 0, 3], baseFret: 1 },
    'G': { frets: [0, 2, 3, 2], baseFret: 1 },
    'Am': { frets: [2, 0, 0, 0], baseFret: 1 },
    'F': { frets: [2, 0, 1, 0], baseFret: 1 },
    'Dm': { frets: [2, 2, 1, 0], baseFret: 1 },
    'Em': { frets: [0, 4, 3, 2], baseFret: 1 },
    'D': { frets: [2, 2, 2, 0], baseFret: 1 },
    'A': { frets: [2, 1, 0, 0], baseFret: 1 },
    'E': { frets: [4, 4, 4, 2], baseFret: 1 },
    'Bm': { frets: [4, 2, 2, 2], baseFret: 1 },
    'Bb': { frets: [3, 2, 1, 1], baseFret: 1 },
    'Bbm': { frets: [3, 1, 1, 1], baseFret: 1 },
    'Bbm7': { frets: [1, 1, 1, 1], baseFret: 1 },
    'C7': { frets: [0, 0, 0, 1], baseFret: 1 },
    'G7': { frets: [0, 2, 1, 2], baseFret: 1 },
    'E7': { frets: [1, 2, 0, 2], baseFret: 1 },
    'A7': { frets: [0, 1, 0, 0], baseFret: 1 },
    'D7': { frets: [2, 0, 2, 0], baseFret: 1 },
    'Cmaj7': { frets: [0, 0, 0, 2], baseFret: 1 },
    'CM7': { frets: [0, 0, 0, 2], baseFret: 1 },
    'Fmaj7': { frets: [2, 4, 1, 0], baseFret: 1 },
    'FM7': { frets: [2, 4, 1, 0], baseFret: 1 },
    'Gmaj7': { frets: [0, 2, 2, 2], baseFret: 1 },
    'GM7': { frets: [0, 2, 2, 2], baseFret: 1 },
    'C#maj7': { frets: [1, 1, 1, 3], baseFret: 1 },
    'C#M7': { frets: [1, 1, 1, 3], baseFret: 1 },
    'Dbmaj7': { frets: [1, 1, 1, 3], baseFret: 1 },
    'DbM7': { frets: [1, 1, 1, 3], baseFret: 1 },
    'Dmaj7': { frets: [2, 2, 2, 4], baseFret: 1 },
    'DM7': { frets: [2, 2, 2, 4], baseFret: 1 },
    'Amaj7': { frets: [1, 1, 0, 0], baseFret: 1 },
    'AM7': { frets: [1, 1, 0, 0], baseFret: 1 },
    'Emaj7': { frets: [1, 3, 0, 2], baseFret: 1 },
    'EM7': { frets: [1, 3, 0, 2], baseFret: 1 },
    'Bbmaj7': { frets: [3, 2, 1, 0], baseFret: 1 },
    'BbM7': { frets: [3, 2, 1, 0], baseFret: 1 },
    'Ebmaj7': { frets: [3, 3, 3, 5], baseFret: 1 },
    'EbM7': { frets: [3, 3, 3, 5], baseFret: 1 },
    'Abmaj7': { frets: [1, 3, 3, 3], baseFret: 1 },
    'AbM7': { frets: [1, 3, 3, 3], baseFret: 1 },
    'Dm7': { frets: [2, 2, 1, 3], baseFret: 1 },
    'A13': { frets: [0, 1, 2, 0], baseFret: 1 },
    'Eb': { frets: [3, 3, 3, 1], baseFret: 1 }
  };

  // Bass Root Fretboard Positions (E, A, D, G strings)
  const BASS_ROOTS = {
    'E': [{ str: 'E', fret: 0, text: 'Open E string' }, { str: 'D', fret: 2, text: 'Fret 2 on D string' }],
    'F': [{ str: 'E', fret: 1, text: 'Fret 1 on E string' }, { str: 'D', fret: 3, text: 'Fret 3 on D string' }],
    'F#': [{ str: 'E', fret: 2, text: 'Fret 2 on E string' }, { str: 'D', fret: 4, text: 'Fret 4 on D string' }],
    'G': [{ str: 'E', fret: 3, text: 'Fret 3 on E string' }, { str: 'G', fret: 0, text: 'Open G string' }],
    'G#': [{ str: 'E', fret: 4, text: 'Fret 4 on E string' }, { str: 'G', fret: 1, text: 'Fret 1 on G string' }],
    'A': [{ str: 'A', fret: 0, text: 'Open A string' }, { str: 'E', fret: 5, text: 'Fret 5 on E string' }],
    'A#': [{ str: 'A', fret: 1, text: 'Fret 1 on A string' }, { str: 'E', fret: 6, text: 'Fret 6 on E string' }],
    'B': [{ str: 'A', fret: 2, text: 'Fret 2 on A string' }, { str: 'E', fret: 7, text: 'Fret 7 on E string' }],
    'C': [{ str: 'A', fret: 3, text: 'Fret 3 on A string' }, { str: 'E', fret: 8, text: 'Fret 8 on E string' }],
    'C#': [{ str: 'A', fret: 4, text: 'Fret 4 on A string' }, { str: 'E', fret: 9, text: 'Fret 9 on E string' }],
    'D': [{ str: 'D', fret: 0, text: 'Open D string' }, { str: 'A', fret: 5, text: 'Fret 5 on A string' }],
    'D#': [{ str: 'A', fret: 6, text: 'Fret 6 on A string' }, { str: 'D', fret: 1, text: 'Fret 1 on D string' }]
  };

  // Vector SVG Fretboard Renderers
  function renderGuitarSvg(v) {
    const width = 100;
    const height = 125;
    const sX = [14, 28, 42, 56, 70, 84];
    const topY = 28;
    const botY = 96;
    const numFrets = 4;
    const fSpacing = (botY - topY) / numFrets;

    let markers = '';
    v.frets.forEach((f, idx) => {
      const x = sX[idx];
      if (f === 'X' || f === 'x') {
        markers += `<text x="${x}" y="18" font-size="10" font-weight="700" fill="#EF4444" text-anchor="middle" font-family="'Cabin',sans-serif">✕</text>`;
      } else if (f === 0) {
        markers += `<circle cx="${x}" cy="15" r="3.5" fill="none" stroke="#FACC15" stroke-width="1.5"/>`;
      }
    });

    let sLines = '';
    sX.forEach((x, i) => {
      const strokeW = 1 + (5 - i) * 0.25;
      sLines += `<line x1="${x}" y1="${topY}" x2="${x}" y2="${botY}" stroke="#9CA3AF" stroke-width="${strokeW}"/>`;
    });

    let fLines = '';
    for (let f = 0; f <= numFrets; f++) {
      const y = topY + f * fSpacing;
      const isNut = f === 0 && (v.baseFret === 1 || !v.baseFret);
      fLines += `<line x1="${sX[0]}" y1="${y}" x2="${sX[5]}" y2="${y}" stroke="${isNut ? '#FACC15' : '#4B5563'}" stroke-width="${isNut ? 3.5 : 1}"/>`;
    }

    let bFret = '';
    if (v.baseFret && v.baseFret > 1) {
      bFret = `<text x="3" y="42" font-size="9" font-weight="700" fill="#FACC15" font-family="'Cabin',sans-serif">${v.baseFret}fr</text>`;
    }

    let dots = '';
    v.frets.forEach((f, idx) => {
      if (typeof f === 'number' && f > 0) {
        const relF = f - (v.baseFret > 1 ? v.baseFret - 1 : 0);
        if (relF >= 1 && relF <= numFrets) {
          const cx = sX[idx];
          const cy = topY + (relF - 0.5) * fSpacing;
          dots += `<circle cx="${cx}" cy="${cy}" r="5" fill="#FACC15" stroke="#133629" stroke-width="1.5"/>`;
        }
      }
    });

    return `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="#0a2017" rx="5"/>
      ${fLines}${sLines}${markers}${dots}${bFret}
      <g font-size="8" fill="#9CA3AF" text-anchor="middle" font-family="'Cabin',sans-serif">
        <text x="14" y="112">E</text><text x="28" y="112">A</text><text x="42" y="112">D</text>
        <text x="56" y="112">G</text><text x="70" y="112">B</text><text x="84" y="112">e</text>
      </g>
    </svg>`;
  }

  function renderUkuleleSvg(v) {
    const width = 90;
    const height = 125;
    const sX = [18, 36, 54, 72];
    const topY = 28;
    const botY = 96;
    const numFrets = 4;
    const fSpacing = (botY - topY) / numFrets;

    let markers = '';
    v.frets.forEach((f, idx) => {
      const x = sX[idx];
      if (f === 'X' || f === 'x') {
        markers += `<text x="${x}" y="18" font-size="10" font-weight="700" fill="#EF4444" text-anchor="middle" font-family="'Cabin',sans-serif">✕</text>`;
      } else if (f === 0) {
        markers += `<circle cx="${x}" cy="15" r="3.5" fill="none" stroke="#FACC15" stroke-width="1.5"/>`;
      }
    });

    let sLines = '';
    sX.forEach(x => {
      sLines += `<line x1="${x}" y1="${topY}" x2="${x}" y2="${botY}" stroke="#9CA3AF" stroke-width="1.2"/>`;
    });

    let fLines = '';
    for (let f = 0; f <= numFrets; f++) {
      const y = topY + f * fSpacing;
      const isNut = f === 0 && (v.baseFret === 1 || !v.baseFret);
      fLines += `<line x1="${sX[0]}" y1="${y}" x2="${sX[3]}" y2="${y}" stroke="${isNut ? '#FACC15' : '#4B5563'}" stroke-width="${isNut ? 3.5 : 1}"/>`;
    }

    let bFret = '';
    if (v.baseFret && v.baseFret > 1) {
      bFret = `<text x="3" y="42" font-size="9" font-weight="700" fill="#FACC15" font-family="'Cabin',sans-serif">${v.baseFret}fr</text>`;
    }

    let dots = '';
    v.frets.forEach((f, idx) => {
      if (typeof f === 'number' && f > 0) {
        const relF = f - (v.baseFret > 1 ? v.baseFret - 1 : 0);
        if (relF >= 1 && relF <= numFrets) {
          const cx = sX[idx];
          const cy = topY + (relF - 0.5) * fSpacing;
          dots += `<circle cx="${cx}" cy="${cy}" r="5" fill="#FACC15" stroke="#133629" stroke-width="1.5"/>`;
        }
      }
    });

    return `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="#0a2017" rx="5"/>
      ${fLines}${sLines}${markers}${dots}${bFret}
      <g font-size="8" fill="#9CA3AF" text-anchor="middle" font-family="'Cabin',sans-serif">
        <text x="18" y="112">G</text><text x="36" y="112">C</text><text x="54" y="112">E</text><text x="72" y="112">A</text>
      </g>
    </svg>`;
  }

  function renderBassSvg(chordObj) {
    const rootName = chordObj.slashBass || chordObj.normRoot;
    const positions = BASS_ROOTS[rootName] || [{ str: 'E', fret: 3, text: 'Fret 3 on E string' }];
    const primary = positions[0];

    const width = 100;
    const height = 125;
    // 4 strings: E (left), A, D, G (right)
    const sX = [18, 36, 54, 72];
    const topY = 28;
    const botY = 96;
    const numFrets = 4;
    const fSpacing = (botY - topY) / numFrets;

    let baseFret = 1;
    if (primary.fret > 4) baseFret = primary.fret - 1;

    let sLines = '';
    sX.forEach((x, i) => {
      sLines += `<line x1="${x}" y1="${topY}" x2="${x}" y2="${botY}" stroke="#9CA3AF" stroke-width="${1.8 - i * 0.2}"/>`;
    });

    let fLines = '';
    for (let f = 0; f <= numFrets; f++) {
      const y = topY + f * fSpacing;
      const isNut = f === 0 && baseFret === 1;
      fLines += `<line x1="${sX[0]}" y1="${y}" x2="${sX[3]}" y2="${y}" stroke="${isNut ? '#FACC15' : '#4B5563'}" stroke-width="${isNut ? 3.5 : 1}"/>`;
    }

    let bFretText = '';
    if (baseFret > 1) {
      bFretText = `<text x="3" y="42" font-size="9" font-weight="700" fill="#FACC15" font-family="'Cabin',sans-serif">${baseFret}fr</text>`;
    }

    let dots = '';
    const strMap = { 'E': 0, 'A': 1, 'D': 2, 'G': 3 };
    const strIdx = strMap[primary.str] !== undefined ? strMap[primary.str] : 0;
    const cx = sX[strIdx];

    if (primary.fret === 0) {
      dots = `<circle cx="${cx}" cy="15" r="4.5" fill="none" stroke="#FACC15" stroke-width="2"/>`;
    } else {
      const relF = primary.fret - (baseFret > 1 ? baseFret - 1 : 0);
      const cy = topY + (relF - 0.5) * fSpacing;
      dots = `<circle cx="${cx}" cy="${cy}" r="6" fill="#FACC15" stroke="#133629" stroke-width="2"/>
              <text x="${cx}" y="${cy + 3}" font-size="7" font-weight="800" fill="#133629" text-anchor="middle" font-family="'Cabin',sans-serif">R</text>`;
    }

    return `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="#0a2017" rx="5"/>
      ${fLines}${sLines}${dots}${bFretText}
      <g font-size="8" fill="#9CA3AF" text-anchor="middle" font-family="'Cabin',sans-serif">
        <text x="18" y="112">E</text><text x="36" y="112">A</text><text x="54" y="112">D</text><text x="72" y="112">G</text>
      </g>
    </svg>`;
  }

  function renderMiniPianoSvg(chordObj) {
    // If root note is in F natural to B natural range (F, F#, G, G#, A, A#, B), have F be the left-most note
    const isFRange = chordObj.rootIdx >= 5 && chordObj.rootIdx <= 11;

    const whiteNotes = isFRange 
      ? ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F']
      : ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

    const blackNotes = isFRange
      ? [
          { name: 'F#', flat: 'Gb', idx: 0.65 },
          { name: 'G#', flat: 'Ab', idx: 1.65 },
          { name: 'A#', flat: 'Bb', idx: 2.65 },
          { name: 'C#', flat: 'Db', idx: 4.65 },
          { name: 'D#', flat: 'Eb', idx: 5.65 }
        ]
      : [
          { name: 'C#', flat: 'Db', idx: 0.65 },
          { name: 'D#', flat: 'Eb', idx: 1.65 },
          { name: 'F#', flat: 'Gb', idx: 3.65 },
          { name: 'G#', flat: 'Ab', idx: 4.65 },
          { name: 'A#', flat: 'Bb', idx: 5.65 }
        ];

    const wWidth = 13.5;
    const totalW = whiteNotes.length * wWidth;
    const totalH = 50;

    let wKeys = '';
    whiteNotes.forEach((note, idx) => {
      const isLit = chordObj.tones.includes(note) || (note === 'B' && chordObj.tones.includes('Cb')) || (note === 'C' && chordObj.tones.includes('B#'));
      const x = idx * wWidth;
      const fill = isLit ? '#FACC15' : '#ffffff';
      const textFill = isLit ? '#133629' : '#4b5563';
      wKeys += `
        <rect x="${x.toFixed(1)}" y="0" width="${wWidth}" height="${totalH}" fill="${fill}" stroke="#374151" stroke-width="0.8" rx="1.5"/>
        <text x="${(x + wWidth/2).toFixed(1)}" y="${totalH - 4}" font-size="7.5" font-weight="700" fill="${textFill}" text-anchor="middle" font-family="'Cabin',sans-serif">${note}</text>
      `;
    });

    // Render black keys WITHOUT accidentals text
    let bKeys = '';
    blackNotes.forEach(b => {
      const isLit = chordObj.tones.includes(b.name) || 
                    chordObj.tones.includes(b.flat) || 
                    chordObj.tones.includes(ENHARMONIC_MAP[b.name]) || 
                    (b.flat && chordObj.tones.includes(ENHARMONIC_MAP[b.flat.toUpperCase()]));
      const x = b.idx * wWidth;
      const fill = isLit ? '#F59E0B' : '#111827';
      const stroke = isLit ? '#D97706' : '#1f2937';
      bKeys += `
        <rect x="${x.toFixed(1)}" y="0" width="8.2" height="30" fill="${fill}" stroke="${stroke}" stroke-width="0.8" rx="1.2"/>
      `;
    });

    return `<svg viewBox="0 0 ${totalW} ${totalH}" width="100%" height="48" style="display:block;max-width:125px;margin:0 auto;">
      ${wKeys}${bKeys}
    </svg>`;
  }

  // Fallback voicer for uncommon extensions
  function getGuitarVoicing(chordObj) {
    if (GUITAR_DATABASE[chordObj.raw]) return GUITAR_DATABASE[chordObj.raw];
    if (chordObj.qualityName === 'Major 7th') {
      if (GUITAR_DATABASE[chordObj.root + 'M7']) return GUITAR_DATABASE[chordObj.root + 'M7'];
      if (GUITAR_DATABASE[chordObj.root + 'maj7']) return GUITAR_DATABASE[chordObj.root + 'maj7'];
      if (GUITAR_DATABASE[chordObj.normRoot + 'maj7']) return GUITAR_DATABASE[chordObj.normRoot + 'maj7'];
    }
    if (GUITAR_DATABASE[chordObj.root + chordObj.qualKey]) return GUITAR_DATABASE[chordObj.root + chordObj.qualKey];
    if (GUITAR_DATABASE[chordObj.normRoot + chordObj.qualKey]) return GUITAR_DATABASE[chordObj.normRoot + chordObj.qualKey];
    if (GUITAR_DATABASE[chordObj.root]) return GUITAR_DATABASE[chordObj.root];
    if (GUITAR_DATABASE[chordObj.normRoot]) return GUITAR_DATABASE[chordObj.normRoot];
    return { frets: ['X', 0, 2, 2, 2, 0], baseFret: 1 };
  }

  function getUkuleleVoicing(chordObj) {
    if (UKULELE_DATABASE[chordObj.raw]) return UKULELE_DATABASE[chordObj.raw];
    if (chordObj.qualityName === 'Major 7th') {
      if (UKULELE_DATABASE[chordObj.root + 'M7']) return UKULELE_DATABASE[chordObj.root + 'M7'];
      if (UKULELE_DATABASE[chordObj.root + 'maj7']) return UKULELE_DATABASE[chordObj.root + 'maj7'];
      if (UKULELE_DATABASE[chordObj.normRoot + 'maj7']) return UKULELE_DATABASE[chordObj.normRoot + 'maj7'];
    }
    if (UKULELE_DATABASE[chordObj.root + chordObj.qualKey]) return UKULELE_DATABASE[chordObj.root + chordObj.qualKey];
    if (UKULELE_DATABASE[chordObj.normRoot + chordObj.qualKey]) return UKULELE_DATABASE[chordObj.normRoot + chordObj.qualKey];
    if (UKULELE_DATABASE[chordObj.root]) return UKULELE_DATABASE[chordObj.root];
    if (UKULELE_DATABASE[chordObj.normRoot]) return UKULELE_DATABASE[chordObj.normRoot];
    return { frets: [0, 0, 0, 3], baseFret: 1 };
  }

  // Active UI filters
  const selectedInstruments = {
    piano: true,
    guitar: true,
    ukulele: false,
    bass: false
  };

  // Highlighting top 2-octave piano keys for a chord
  function highlightMasterPianoKeys(tones) {
    document.querySelectorAll('.piano-white-key').forEach(el => {
      const noteLetter = el.getAttribute('data-letter');
      if (tones && tones.includes(noteLetter)) {
        el.classList.add('chord-highlight');
      } else {
        el.classList.remove('chord-highlight');
      }
    });

    document.querySelectorAll('.piano-black-key').forEach(el => {
      const sharp = el.getAttribute('data-sharp');
      const flat = el.getAttribute('data-flat');
      if (tones && (tones.includes(sharp) || tones.includes(flat) || tones.includes(ENHARMONIC_MAP[sharp]) || tones.includes(ENHARMONIC_MAP[flat]))) {
        el.classList.add('chord-highlight');
      } else {
        el.classList.remove('chord-highlight');
      }
    });
  }

  // Master render of the modal
  window.openChordsAndNotesModal = function(pipWindow, modal, modalTitle, modalBody, registerStop) {
    isModalActive = true;
    modal.classList.add('wide-overlay');
    const modalContent = pipWindow.document.querySelector('.modal-content');
    if (modalContent) modalContent.classList.add('wide-modal');

    // Ensure sample manifest is fetched and indexed immediately on open
    audio.sampleManager.ensureManifest();

    // Progression playback state and controller
    let progressionTimers = [];
    let isPlayingProgression = false;

    function stopProgression() {
      isPlayingProgression = false;
      progressionTimers.forEach(id => clearTimeout(id));
      progressionTimers = [];
      audio.stopAllVoices();
      highlightMasterPianoKeys([]);
      const btn = pipWindow.document.getElementById('playProgressionBtn');
      if (btn) {
        btn.textContent = '▶ Play Progression';
        btn.classList.remove('active');
      }
    }

    registerStop(() => {
      isModalActive = false;
      stopProgression();
      audio.stopAll();
      highlightMasterPianoKeys([]);
      modal.classList.remove('wide-overlay');
      if (modalContent) modalContent.classList.remove('wide-modal');
    });

    modalTitle.textContent = "🎹 CHORDS, PIANO KEYBOARD & VOICINGS";

    modalBody.innerHTML = `
      <div class="chords-container">
        <!-- 2-Octave Master Interactive Piano -->
        <div class="piano-keyboard-container">
          <div class="piano-header-bar">
            <div class="piano-header-title">
              <span>2-Octave Piano (C3 - C5)</span>
              <span class="midi-status-indicator">
                <span class="midi-dot" id="midiDot"></span>
                <span id="midiText">MIDI Ready</span>
              </span>
            </div>
            <div class="piano-sound-toggle">
              <button class="piano-toggle-btn active" id="toggleAcousticBtn" title="Acoustic Grand Piano Sound">
                ${SVGS.acousticPiano}
                <span>Piano</span>
              </button>
              <button class="piano-toggle-btn" id="toggleRhodesBtn" title="Classic Rhodes-Style Electric Piano Sound">
                ${SVGS.electricPiano}
                <span>Rhodes EP</span>
              </button>
            </div>
          </div>

          <!-- The Keyboard -->
          <div class="piano-keyboard" id="masterPiano">
            ${PIANO_WHITE_KEYS.map(k => `
              <div class="piano-white-key" data-midi="${k.midi}" data-letter="${k.letter}" data-note="${k.note}">
                <span>${k.letter}<sub style="font-size:7px;">${k.oct}</sub></span>
              </div>
            `).join('')}

            ${PIANO_BLACK_KEYS.map(b => `
              <div class="piano-black-key" style="left: ${b.leftPercent}%;" data-midi="${b.midi}" data-sharp="${b.note.replace(/[0-9]/g, '')}" data-flat="${b.flat.replace(/[0-9]/g, '')}">
                <span class="black-key-sharp">${b.note.replace(/[0-9]/g, '')}</span>
                <span class="key-sep">/</span>
                <span class="black-key-flat">${b.flat.replace(/[0-9]/g, '')}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Chord Progression Search Input -->
        <div class="chord-search-row">
          <input type="text" id="chordProgInput" class="chord-search-input" value="G, Dm, Bbm7, A13" placeholder="Enter chords or progression (e.g. G, Dm, Bbm7, A13 or C - G - Am - F)...">
          <button id="playProgressionBtn" class="chord-play-btn" style="padding: 7px 12px; font-size: 12px;" title="Play or Stop chord progression in tempo">▶ Play Progression</button>
        </div>

        <!-- Instrument Checkboxes -->
        <div class="inst-checkbox-bar">
          <span style="color:#FEF08A; font-weight:700; font-size:11px; margin-right:4px;">Display Instruments:</span>
          <label class="inst-checkbox-label">
            <input type="checkbox" id="checkPiano" ${selectedInstruments.piano ? 'checked' : ''}>
            ${SVGS.acousticPiano}
            <span>Piano</span>
          </label>
          <label class="inst-checkbox-label">
            <input type="checkbox" id="checkGuitar" ${selectedInstruments.guitar ? 'checked' : ''}>
            ${SVGS.guitar}
            <span>Guitar</span>
          </label>
          <label class="inst-checkbox-label">
            <input type="checkbox" id="checkUkulele" ${selectedInstruments.ukulele ? 'checked' : ''}>
            ${SVGS.ukulele}
            <span>Ukulele</span>
          </label>
          <label class="inst-checkbox-label">
            <input type="checkbox" id="checkBass" ${selectedInstruments.bass ? 'checked' : ''}>
            ${SVGS.bass}
            <span>Bass (Root Note)</span>
          </label>
        </div>

        <!-- Chords Diagrams Container -->
        <div id="chordsGrid" class="chords-grid"></div>
      </div>
    `;

    // Hook Piano / Rhodes sound toggle
    const toggleAcoustic = pipWindow.document.getElementById('toggleAcousticBtn');
    const toggleRhodes = pipWindow.document.getElementById('toggleRhodesBtn');

    toggleAcoustic.addEventListener('click', () => {
      audio.setSoundType('acoustic');
      toggleAcoustic.classList.add('active');
      toggleRhodes.classList.remove('active');
    });

    toggleRhodes.addEventListener('click', () => {
      audio.setSoundType('rhodes');
      toggleRhodes.classList.add('active');
      toggleAcoustic.classList.remove('active');
    });

    // Piano key interactions (mouse/touch with mouseup release)
    const masterPiano = pipWindow.document.getElementById('masterPiano');
    const activeHeldNotes = new Set();

    const stopAllHeldKeys = () => {
      activeHeldNotes.forEach(midi => {
        audio.stopNote(midi, 0.08);
        const el = masterPiano.querySelector(`[data-midi="${midi}"]`);
        if (el) el.classList.remove('active-key');
      });
      activeHeldNotes.clear();
    };

    masterPiano.querySelectorAll('[data-midi]').forEach(keyEl => {
      const midi = parseInt(keyEl.getAttribute('data-midi'), 10);
      const onDown = (e) => {
        e.preventDefault();
        keyEl.classList.add('active-key');
        activeHeldNotes.add(midi);
        audio.startNote(midi, 0.85);
      };
      const onUp = () => {
        if (activeHeldNotes.has(midi)) {
          keyEl.classList.remove('active-key');
          activeHeldNotes.delete(midi);
          audio.stopNote(midi, 0.08);
        }
      };

      keyEl.addEventListener('mousedown', onDown);
      keyEl.addEventListener('mouseup', onUp);
      keyEl.addEventListener('mouseleave', onUp);
      keyEl.addEventListener('touchstart', onDown, { passive: false });
      keyEl.addEventListener('touchend', onUp);
      keyEl.addEventListener('touchcancel', onUp);
    });

    // Window-level mouseup release to catch mouse releases outside the key
    pipWindow.addEventListener('mouseup', () => {
      if (activeHeldNotes.size > 0) {
        stopAllHeldKeys();
      }
    });

    // MIDI setup
    setupWebMidi(
      (midiNote, velocity) => {
        if (!isModalActive) return;
        audio.startNote(midiNote, velocity ? velocity / 127 : 0.8);
        const el = masterPiano.querySelector(`[data-midi="${midiNote}"]`);
        if (el) el.classList.add('active-key');
      },
      (midiNote) => {
        if (!isModalActive) return;
        audio.stopNote(midiNote, 0.08);
        const el = masterPiano.querySelector(`[data-midi="${midiNote}"]`);
        if (el) el.classList.remove('active-key');
      }
    );

    // Instrument Checkbox event listeners
    ['checkPiano', 'checkGuitar', 'checkUkulele', 'checkBass'].forEach(id => {
      const el = pipWindow.document.getElementById(id);
      if (el) {
        el.addEventListener('change', (e) => {
          const key = id.replace('check', '').toLowerCase();
          selectedInstruments[key] = e.target.checked;
          renderChordsGrid();
        });
      }
    });

    // Progression rendering function: horizontal instrument boxes
    const chordInput = pipWindow.document.getElementById('chordProgInput');
    const chordsGrid = pipWindow.document.getElementById('chordsGrid');

    function renderChordsGrid() {
      const val = chordInput.value.trim();
      const tokens = val.split(/[\s,\-|]+/).filter(t => t.length > 0);

      if (tokens.length === 0) {
        chordsGrid.innerHTML = `<div style="text-align:center;color:#9ca3af;padding:20px;font-family:'Cabin',sans-serif;">Type one or more chord names above (e.g. G, Dm, Bbm7, A13).</div>`;
        return;
      }

      const parsedChords = tokens.map(parseChord).filter(Boolean);

      if (parsedChords.length === 0) {
        chordsGrid.innerHTML = `<div style="text-align:center;color:#f87171;padding:20px;font-family:'Cabin',sans-serif;">Could not parse chord names. Try standard chord symbols like C, Am, G7, Bbm7.</div>`;
        return;
      }

      const instConfigs = [
        { key: 'piano', title: 'Piano Chords', icon: SVGS.acousticPiano, render: (ch) => renderMiniPianoSvg(ch) },
        { key: 'guitar', title: 'Guitar Chords', icon: SVGS.guitar, render: (ch) => renderGuitarSvg(getGuitarVoicing(ch)) },
        { key: 'ukulele', title: 'Ukulele Chords', icon: SVGS.ukulele, render: (ch) => renderUkuleleSvg(getUkuleleVoicing(ch)) },
        { 
          key: 'bass', 
          title: 'Electric Bass (Root Notes)', 
          icon: SVGS.bass, 
          render: (ch) => {
            const rootName = ch.slashBass || ch.normRoot;
            const bassPos = (BASS_ROOTS[rootName] || [{ str: 'E', fret: 3, text: 'Fret 3 on E string' }])[0];
            return `${renderBassSvg(ch)}<div style="font-size:9.5px;color:#FEF08A;font-weight:700;margin-top:2px;text-align:center;">${bassPos.text}</div>`;
          } 
        }
      ];

      const activeInsts = instConfigs.filter(cfg => selectedInstruments[cfg.key]);

      if (activeInsts.length === 0) {
        chordsGrid.innerHTML = `<div style="text-align:center;color:#FEF08A;padding:24px;font-family:'Cabin',sans-serif;">Please check at least one instrument above (Piano, Guitar, Ukulele, or Bass) to display chord charts.</div>`;
        return;
      }

      const progSummary = parsedChords.map(c => c.raw).join(' → ');

      chordsGrid.innerHTML = activeInsts.map(inst => {
        const chordColsHtml = parsedChords.map((chord, idx) => {
          return `
            <div class="chord-col" data-idx="${idx}" data-inst="${inst.key}" title="Click to highlight on 2-octave piano">
              <div class="chord-col-header">
                <span class="chord-col-name">${chord.raw}</span>
                <button class="chord-col-play-btn play-single-chord-btn" data-chord-idx="${idx}" data-inst="${inst.key}" title="Play ${chord.raw}">▶</button>
              </div>
              <div style="font-size:9.5px;color:#d1d5db;margin-bottom:3px;font-family:'Cabin',sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;text-align:center;">
                ${chord.tones.join(' • ')}
              </div>
              <div class="chord-col-chart">
                ${inst.render(chord)}
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="inst-box">
            <div class="inst-box-header">
              <div class="inst-box-title">
                ${inst.icon}
                <span>${inst.title}</span>
              </div>
              <div class="inst-box-subtitle">${progSummary}</div>
            </div>
            <div class="inst-chords-row">
              ${chordColsHtml}
            </div>
          </div>
        `;
      }).join('');

      // Attach single chord play buttons
      chordsGrid.querySelectorAll('.play-single-chord-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-chord-idx'), 10);
          const instKey = btn.getAttribute('data-inst');
          const ch = parsedChords[idx];
          if (ch) {
            highlightMasterPianoKeys(ch.tones);
            if (instKey === 'bass') {
              audio.playBass(ch.slashBass || ch.normRoot, 1.2);
            } else if (instKey === 'guitar') {
              audio.playGuitarVoicing(ch);
            } else if (instKey === 'ukulele') {
              audio.playUkuleleVoicing(ch);
            } else {
              audio.playChord(ch.midiNotes, 1.0, selectedInstruments.bass ? (ch.slashBass || ch.normRoot) : null, 'rhodes');
            }
          }
        });
      });

      // Clicking any column highlights its notes on top 2-octave piano
      chordsGrid.querySelectorAll('.chord-col').forEach(col => {
        col.addEventListener('click', () => {
          const idx = parseInt(col.getAttribute('data-idx'), 10);
          const ch = parsedChords[idx];
          if (ch) {
            highlightMasterPianoKeys(ch.tones);
          }
        });
      });
    }

    chordInput.addEventListener('input', () => {
      stopProgression();
      renderChordsGrid();
    });

    // Play / Stop entire progression sequentially
    const playProgBtn = pipWindow.document.getElementById('playProgressionBtn');

    function startProgression() {
      stopProgression();
      const tokens = chordInput.value.trim().split(/[\s,\-|]+/).filter(t => t.length > 0);
      const parsed = tokens.map(parseChord).filter(Boolean);
      if (parsed.length === 0) return;

      isPlayingProgression = true;
      playProgBtn.textContent = '⏹ Stop Progression';
      playProgBtn.classList.add('active');

      // 96 BPM half note duration = 2 beats = 1250 ms per chord step
      const halfNoteMs = Math.round((60 / 96) * 2 * 1000);

      parsed.forEach((ch, idx) => {
        const timerId = setTimeout(() => {
          if (!isModalActive || !isPlayingProgression) return;
          highlightMasterPianoKeys(ch.tones);
          audio.playChord(ch.midiNotes, 1.2, selectedInstruments.bass ? (ch.slashBass || ch.normRoot) : null, 'rhodes');
          if (idx === parsed.length - 1) {
            const endTimer = setTimeout(() => {
              stopProgression();
            }, halfNoteMs);
            progressionTimers.push(endTimer);
          }
        }, idx * halfNoteMs);
        progressionTimers.push(timerId);
      });
    }

    playProgBtn.addEventListener('click', () => {
      if (isPlayingProgression) {
        stopProgression();
      } else {
        startProgression();
      }
    });

    // Initial render
    renderChordsGrid();
    modal.style.display = 'flex';
  };
})(window);
