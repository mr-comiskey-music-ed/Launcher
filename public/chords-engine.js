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
      this.heldPitches = new Set();

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

      // Track active pitch hold
      this.heldPitches.add(midiNote);

      // Stop existing voice on this pitch if any
      this.stopNote(midiNote, 0.02);
      this.heldPitches.add(midiNote);

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
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

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
          this.sampleManager.loadNylonGuitarBuffer(midiNote).then(buf => {
            if (buf && this.heldPitches.has(midiNote)) {
              this.playGuitarBufferDirectly(buf, midiNote, velocity, targetInst);
            }
          });
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

            // Natural acoustic decay envelope (fades smoothly and never sustains forever)
            gain.gain.exponentialRampToValueAtTime(0.0001, now + (targetInst === 'bass' ? 2.8 : 3.8));

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
          this.sampleManager.loadAudioBuffer(best.sample).then(buf => {
            if (buf && this.heldPitches.has(midiNote)) {
              const existingVoice = this.activeVoices.get(midiNote);
              if (existingVoice && existingVoice.nodes) {
                try { existingVoice.stop(0.04); } catch (e) {}
              }
              this.playBufferDirectly(buf, midiNote, best.midi, velocity, targetInst, ctx.currentTime);
            }
          });
        }
      }

      // 3. Fallback synthesizer with sustained envelope
      return this.startSynthFallback(midiNote, velocity, targetInst);
    }

    playBufferDirectly(buffer, midiNote, bestMidi, velocity, targetInst, startTime) {
      try {
        if (!this.heldPitches.has(midiNote)) return;
        const ctx = this.ensureContext();
        const now = ctx.currentTime;
        const src = ctx.createBufferSource();
        src.buffer = buffer;

        const semitoneShift = midiNote - bestMidi;
        src.playbackRate.value = Math.pow(2, semitoneShift / 12);

        const gain = ctx.createGain();
        const gainLevel = velocity * (targetInst === 'bass' ? 0.85 : 0.62);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(gainLevel, now + 0.016);
        // Natural acoustic string vibration decay
        gain.gain.exponentialRampToValueAtTime(0.0001, now + (targetInst === 'bass' ? 2.8 : 3.8));

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
        try { src.stop(now + 4.0); } catch (e) {}

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
        console.warn("Direct buffer play error:", e);
      }
    }

    playGuitarBufferDirectly(buffer, midiNote, velocity, targetInst) {
      try {
        if (!this.heldPitches.has(midiNote)) return;
        const ctx = this.ensureContext();
        const now = ctx.currentTime;
        const src = ctx.createBufferSource();
        src.buffer = buffer;

        const gain = ctx.createGain();
        const gainLevel = velocity * (targetInst === 'ukulele' ? 1.35 : 1.40);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(gainLevel, now + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        if (targetInst === 'ukulele') {
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
        console.warn("Guitar direct play error:", e);
      }
    }

    startSynthFallback(midiNote, velocity, targetInst) {
      const ctx = this.ensureContext();
      const freq = 440 * Math.pow(2, (midiNote - 69) / 12);
      const now = ctx.currentTime;

      const masterGain = ctx.createGain();
      const level = velocity * (targetInst === 'bass' ? 0.6 : 0.45);
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.linearRampToValueAtTime(level, now + 0.008);
      // Natural acoustic decay envelope (never sustains indefinitely)
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + (targetInst === 'bass' ? 2.8 : 3.5));
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

      // Schedule safety auto-stop on all oscillators so sound can never sustain indefinitely
      nodes.forEach(n => {
        if (n && n.stop) {
          try { n.stop(now + 3.4); } catch (e) {}
        }
      });

      const voice = {
        midi: midiNote,
        gain: masterGain,
        nodes: nodes,
        stop: (releaseSec = 0.08) => {
          try {
            const t = ctx.currentTime;
            masterGain.gain.cancelScheduledValues(t);
            const currentVal = Math.max(0.0001, masterGain.gain.value || level);
            masterGain.gain.setValueAtTime(currentVal, t);
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
      setTimeout(() => {
        if (this.activeVoices.get(midiNote) === voice) {
          this.activeVoices.delete(midiNote);
        }
      }, 3500);
      return voice;
    }

    stopNote(midiNote, releaseSec = 0.08) {
      if (this.heldPitches) this.heldPitches.delete(midiNote);
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

    playBass(rootName, duration = 1.2) {
      if (!rootName) return null;
      this.stopAllVoices();
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

    playMetronomeClick(isDownbeat = false) {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(isDownbeat ? 1000 : 640, now);
        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } catch (e) {}
    }

    playProgressionStep(chordObj, durationSec = 1.0, style = 'block', inversion = 0, targetInst = 'rhodes', withBass = true) {
      if (!chordObj) return;
      this.stopAllVoices();

      const activeVoicesList = [];
      const rootName = chordObj.slashBass || chordObj.normRoot;

      // 1. Bass note (playing alongside chord)
      if (withBass && rootName) {
        const cleanRoot = rootName.trim().toUpperCase();
        const bassMidi = this.sampleManager.noteToMidi(cleanRoot + '2') || 36;
        const bassVoice = this.startNote(bassMidi, 0.92, 'bass');
        if (bassVoice) activeVoicesList.push(bassVoice);
      }

      // 2. Chord notes with inversion applied
      let notes = [...(chordObj.midiNotes || [60, 64, 67])];
      if (inversion === 1 && notes.length > 1) {
        notes[0] += 12;
      } else if (inversion === 2 && notes.length > 2) {
        notes[0] += 12;
        notes[1] += 12;
      }
      notes.sort((a, b) => a - b);

      if (style === 'strum') {
        const strumStep = 0.03;
        notes.forEach((pitch, idx) => {
          setTimeout(() => {
            const v = this.startNote(pitch, 0.82, targetInst);
            if (v) activeVoicesList.push(v);
          }, idx * strumStep * 1000);
        });
      } else if (style === 'arp') {
        const arpStep = Math.max(0.12, Math.min(0.24, durationSec / Math.max(4, notes.length * 2)));
        let currentNoteIdx = 0;
        let dir = 1;
        const totalSteps = Math.floor(durationSec / arpStep);
        for (let s = 0; s < totalSteps; s++) {
          const pitch = notes[currentNoteIdx];
          setTimeout(() => {
            const v = this.startNote(pitch, 0.8, targetInst);
            if (v) {
              setTimeout(() => { try { v.stop(0.06); } catch (e) {} }, arpStep * 850);
            }
          }, s * arpStep * 1000);
          currentNoteIdx += dir;
          if (currentNoteIdx >= notes.length - 1) dir = -1;
          else if (currentNoteIdx <= 0) dir = 1;
        }
      } else {
        // Block chord: trigger notes with subtle 10ms humanization
        notes.forEach((pitch, idx) => {
          setTimeout(() => {
            const v = this.startNote(pitch, 0.8, targetInst);
            if (v) activeVoicesList.push(v);
          }, idx * 10);
        });
      }

      // Synchronized release at end of duration
      setTimeout(() => {
        activeVoicesList.forEach(v => {
          try { v.stop(0.1); } catch (e) {}
        });
      }, Math.max(0.3, durationSec - 0.02) * 1000);
    }

    playGuitarVoicing(chordObj, voicingIdx = 0) {
      if (!chordObj) return;
      this.stopAllVoices();
      const v = getGuitarVoicing(chordObj, voicingIdx);
      const openStringsMidi = [40, 45, 50, 55, 59, 64]; // E2, A2, D3, G3, B3, E4
      const activeChordVoices = [];
      const duration = 1.3;

      let strumDelay = 0;
      v.frets.forEach((f, idx) => {
        if (typeof f === 'number') {
          const noteMidi = openStringsMidi[idx] + f;
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
        if (this.heldPitches) this.heldPitches.clear();
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
    { note: 'C#3', flat: 'Db3', midi: 49, leftPercent: 4.3 },
    { note: 'D#3', flat: 'Eb3', midi: 51, leftPercent: 11.0 },
    { note: 'F#3', flat: 'Gb3', midi: 54, leftPercent: 24.3 },
    { note: 'G#3', flat: 'Ab3', midi: 56, leftPercent: 31.0 },
    { note: 'A#3', flat: 'Bb3', midi: 58, leftPercent: 37.6 },
    { note: 'C#4', flat: 'Db4', midi: 61, leftPercent: 51.0 },
    { note: 'D#4', flat: 'Eb4', midi: 63, leftPercent: 57.6 },
    { note: 'F#4', flat: 'Gb4', midi: 66, leftPercent: 71.0 },
    { note: 'G#4', flat: 'Ab4', midi: 68, leftPercent: 77.6 },
    { note: 'A#4', flat: 'Bb4', midi: 70, leftPercent: 84.3 }
  ];

  // Web MIDI Handler
  let midiAccess = null;
  let isModalActive = false;

  function setupWebMidi(onNoteOn, onNoteOff) {
    if (typeof navigator !== 'undefined' && navigator && navigator.requestMIDIAccess) {
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
  const CHROMATIC_NOTES_FLAT = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const ENHARMONIC_MAP = {
    'DB': 'C#', 'EB': 'D#', 'GB': 'F#', 'AB': 'G#', 'BB': 'A#',
    'B#': 'C', 'E#': 'F', 'CB': 'B', 'FB': 'E'
  };

  const CHORD_FORMULAS = {
    '': { name: 'Major', intervals: [0, 4, 7] },
    'MAJ': { name: 'Major', intervals: [0, 4, 7] },
    'MIN': { name: 'Minor', intervals: [0, 3, 7] },
    'M': { name: 'Minor', intervals: [0, 3, 7] },
    '-': { name: 'Minor', intervals: [0, 3, 7] },
    '7': { name: 'Dominant 7th', intervals: [0, 4, 7, 10] },
    'DOM7': { name: 'Dominant 7th', intervals: [0, 4, 7, 10] },
    'MAJ7': { name: 'Major 7th', intervals: [0, 4, 7, 11] },
    'MIN7': { name: 'Minor 7th', intervals: [0, 3, 7, 10] },
    'M7': { name: 'Minor 7th', intervals: [0, 3, 7, 10] },
    '-7': { name: 'Minor 7th', intervals: [0, 3, 7, 10] },
    'MMAJ7': { name: 'Minor-Major 7th', intervals: [0, 3, 7, 11] },
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
    'MIN9': { name: 'Minor 9th', intervals: [0, 3, 7, 10, 14] },
    'M9': { name: 'Minor 9th', intervals: [0, 3, 7, 10, 14] },
    'M9B5': { name: 'Half-Diminished 9th', intervals: [0, 3, 6, 10, 14] },
    'ADD9': { name: 'Add 9', intervals: [0, 4, 7, 14] },
    '13': { name: 'Dominant 13th', intervals: [0, 4, 7, 10, 14, 21] }
  };

  // Global reference for active key spelling in chord parsing
  let activeProgressionKey = 'C';

  function parseChord(rawStr, keyContext = null) {
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
    const cleanQual = rawQual.toLowerCase().replace(/[()]/g, '').trim();
    if (cleanQual === 'mmaj7' || cleanQual === 'm(maj7)' || cleanQual === 'mmaj' || cleanQual.startsWith('mmaj') || ((cleanQual.includes('maj7') || cleanQual.includes('maj')) && (cleanQual.startsWith('m') || cleanQual.startsWith('-')) && !cleanQual.startsWith('maj'))) {
      formula = CHORD_FORMULAS['MMAJ7'];
    } else if (cleanQual === 'maj9' || cleanQual.includes('maj9')) {
      formula = CHORD_FORMULAS['MAJ9'];
    } else if (cleanQual === 'm9b5' || cleanQual === 'ø9') {
      formula = CHORD_FORMULAS['M9B5'];
    } else if (cleanQual === 'm9' || cleanQual === 'min9' || cleanQual === '-9' || (cleanQual.includes('9') && cleanQual.startsWith('m'))) {
      formula = CHORD_FORMULAS['M9'];
    } else if (cleanQual === '9' || cleanQual === 'dom9' || cleanQual.includes('9')) {
      formula = CHORD_FORMULAS['9'];
    } else if (cleanQual === 'maj7' || cleanQual === 'maj' || cleanQual === 'δ7' || cleanQual === 'δ' || cleanQual.includes('maj7')) {
      formula = CHORD_FORMULAS['MAJ7'];
    } else if (cleanQual === 'm7b5' || cleanQual === 'ø' || cleanQual === 'ø7' || cleanQual.includes('ø')) {
      formula = CHORD_FORMULAS['M7B5'];
    } else if (cleanQual === 'm7' || cleanQual === 'min7' || cleanQual === '-7' || cleanQual.includes('m7')) {
      formula = CHORD_FORMULAS['MIN7'];
    } else if (cleanQual === '7' || cleanQual === 'dom7' || cleanQual.includes('7')) {
      formula = CHORD_FORMULAS['7'];
    } else if (cleanQual === 'dim7') {
      formula = CHORD_FORMULAS['DIM7'];
    } else if (cleanQual === 'dim' || cleanQual === '°') {
      formula = CHORD_FORMULAS['DIM'];
    } else if (cleanQual === 'aug' || cleanQual === '+' || cleanQual.includes('+')) {
      formula = CHORD_FORMULAS['AUG'];
    } else if (cleanQual === 'add9') {
      formula = CHORD_FORMULAS['ADD9'];
    } else if (cleanQual === '7sus4' || cleanQual === '7sus') {
      formula = CHORD_FORMULAS['7SUS4'];
    } else if (cleanQual === 'sus4') {
      formula = CHORD_FORMULAS['SUS4'];
    } else if (cleanQual === 'sus2') {
      formula = CHORD_FORMULAS['SUS2'];
    } else if (cleanQual === 'm' || cleanQual === 'min' || cleanQual === '-') {
      formula = CHORD_FORMULAS['MIN'];
    } else if (cleanQual === '' || cleanQual === 'maj') {
      formula = CHORD_FORMULAS['MAJ'];
    } else {
      const upper = rawQual.toUpperCase().replace(/[()]/g, '');
      formula = CHORD_FORMULAS[upper] || CHORD_FORMULAS['MAJ'];
    }

    const flatKeys = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];
    const activeKey = keyContext || activeProgressionKey || 'C';
    const isFlatKey = flatKeys.some(k => k.toLowerCase() === activeKey.toLowerCase()) || activeKey.includes('b');
    const useFlatSpelling = isFlatKey || root.includes('b') || root.includes('♭') || ['F', 'BB', 'EB', 'AB', 'DB', 'GB'].includes(normRoot.toUpperCase());
    const notesTable = useFlatSpelling ? CHROMATIC_NOTES_FLAT : CHROMATIC_NOTES;
    const tones = formula.intervals.map(int => notesTable[(rootIdx + int) % 12]);
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
  // Authentic Standard Guitar Voicings with Multiple Playable Positions
  const GUITAR_VOICINGS_DATABASE = {
    'C': [
      { frets: ['X', 3, 2, 0, 1, 0], baseFret: 1, desc: 'Open C' },
      { frets: ['X', 3, 5, 5, 5, 3], baseFret: 3, desc: 'Barre (A-shape)' },
      { frets: [8, 10, 10, 9, 8, 8], baseFret: 8, desc: 'Barre (E-shape)' }
    ],
    'G': [
      { frets: [3, 2, 0, 0, 0, 3], baseFret: 1, desc: 'Open G' },
      { frets: [3, 5, 5, 4, 3, 3], baseFret: 3, desc: 'Barre (E-shape)' },
      { frets: ['X', 10, 12, 12, 12, 10], baseFret: 10, desc: 'Barre (A-shape)' }
    ],
    'D': [
      { frets: ['X', 'X', 0, 2, 3, 2], baseFret: 1, desc: 'Open D' },
      { frets: ['X', 5, 7, 7, 7, 5], baseFret: 5, desc: 'Barre (A-shape)' },
      { frets: [10, 12, 12, 11, 10, 10], baseFret: 10, desc: 'Barre (E-shape)' }
    ],
    'A': [
      { frets: ['X', 0, 2, 2, 2, 0], baseFret: 1, desc: 'Open A' },
      { frets: [5, 7, 7, 6, 5, 5], baseFret: 5, desc: 'Barre (E-shape)' },
      { frets: ['X', 12, 14, 14, 14, 12], baseFret: 12, desc: 'Barre (A-shape)' }
    ],
    'E': [
      { frets: [0, 2, 2, 1, 0, 0], baseFret: 1, desc: 'Open E' },
      { frets: ['X', 7, 9, 9, 9, 7], baseFret: 7, desc: 'Barre (A-shape)' },
      { frets: [12, 14, 14, 13, 12, 12], baseFret: 12, desc: 'Barre (E-shape)' }
    ],
    'Am': [
      { frets: ['X', 0, 2, 2, 1, 0], baseFret: 1, desc: 'Open Am' },
      { frets: [5, 7, 7, 5, 5, 5], baseFret: 5, desc: 'Barre (Em-shape)' },
      { frets: ['X', 12, 14, 14, 13, 12], baseFret: 12, desc: 'Barre (Am-shape)' }
    ],
    'Em': [
      { frets: [0, 2, 2, 0, 0, 0], baseFret: 1, desc: 'Open Em' },
      { frets: ['X', 7, 9, 9, 8, 7], baseFret: 7, desc: 'Barre (Am-shape)' },
      { frets: [12, 14, 14, 12, 12, 12], baseFret: 12, desc: 'Barre (Em-shape)' }
    ],
    'Dm': [
      { frets: ['X', 'X', 0, 2, 3, 1], baseFret: 1, desc: 'Open Dm' },
      { frets: ['X', 5, 7, 7, 6, 5], baseFret: 5, desc: 'Barre (Am-shape)' },
      { frets: [10, 12, 12, 10, 10, 10], baseFret: 10, desc: 'Barre (Em-shape)' }
    ],
    'F': [
      { frets: [1, 3, 3, 2, 1, 1], baseFret: 1, desc: 'Barre F' },
      { frets: ['X', 'X', 3, 2, 1, 1], baseFret: 1, desc: 'Easy 4-string F' },
      { frets: ['X', 8, 10, 10, 10, 8], baseFret: 8, desc: 'Barre (A-shape)' }
    ],
    'Bm': [
      { frets: ['X', 2, 4, 4, 3, 2], baseFret: 2, desc: 'Barre (Am-shape)' },
      { frets: [7, 9, 9, 7, 7, 7], baseFret: 7, desc: 'Barre (Em-shape)' }
    ],
    'Bbm': [
      { frets: ['X', 1, 3, 3, 2, 1], baseFret: 1, desc: 'Barre (Am-shape)' },
      { frets: [6, 8, 8, 6, 6, 6], baseFret: 6, desc: 'Barre (Em-shape)' }
    ],
    'Bb': [
      { frets: ['X', 1, 3, 3, 3, 1], baseFret: 1, desc: 'Barre (A-shape)' },
      { frets: [6, 8, 8, 7, 6, 6], baseFret: 6, desc: 'Barre (E-shape)' }
    ],
    'Bb7': [
      { frets: ['X', 1, 3, 1, 3, 1], baseFret: 1, desc: 'Barre (A7-shape)' },
      { frets: [6, 8, 6, 7, 6, 6], baseFret: 6, desc: 'Barre (E7-shape)' }
    ],
    'Eb': [
      { frets: ['X', 6, 8, 8, 8, 6], baseFret: 6, desc: 'Barre (A-shape)' },
      { frets: ['X', 'X', 5, 3, 4, 3], baseFret: 3, desc: 'Open/Easy Eb' },
      { frets: [11, 13, 13, 12, 11, 11], baseFret: 11, desc: 'Barre (E-shape)' }
    ],
    'Eb7': [
      { frets: ['X', 6, 8, 6, 8, 6], baseFret: 6, desc: 'Barre (A7-shape)' },
      { frets: [11, 13, 11, 12, 11, 11], baseFret: 11, desc: 'Barre (E7-shape)' }
    ],
    'Ab': [
      { frets: [4, 6, 6, 5, 4, 4], baseFret: 4, desc: 'Barre (E-shape)' },
      { frets: ['X', 11, 13, 13, 13, 11], baseFret: 11, desc: 'Barre (A-shape)' }
    ],
    'Ab7': [
      { frets: [4, 6, 4, 5, 4, 4], baseFret: 4, desc: 'Barre (E7-shape)' },
      { frets: ['X', 11, 13, 11, 13, 11], baseFret: 11, desc: 'Barre (A7-shape)' }
    ],
    'F7': [
      { frets: [1, 3, 1, 2, 1, 1], baseFret: 1, desc: 'Barre (E7-shape)' },
      { frets: ['X', 8, 10, 8, 10, 8], baseFret: 8, desc: 'Barre (A7-shape)' }
    ],
    'B': [
      { frets: ['X', 2, 4, 4, 4, 2], baseFret: 2, desc: 'Barre (A-shape)' },
      { frets: [7, 9, 9, 8, 7, 7], baseFret: 7, desc: 'Barre (E-shape)' }
    ],
    'Bmaj7': [
      { frets: ['X', 2, 4, 3, 4, 2], baseFret: 2, desc: 'Barre (Amaj7-shape)' },
      { frets: [7, 9, 8, 8, 7, 7], baseFret: 7, desc: 'Barre (Emaj7-shape)' },
      { frets: ['X', 2, 1, 3, 0, 'X'], baseFret: 1, desc: 'Jazz Open Bmaj7' }
    ],
    'Cbmaj7': [
      { frets: ['X', 2, 4, 3, 4, 2], baseFret: 2, desc: 'Barre (Amaj7-shape)' },
      { frets: [7, 9, 8, 8, 7, 7], baseFret: 7, desc: 'Barre (Emaj7-shape)' }
    ],
    'F#': [
      { frets: [2, 4, 4, 3, 2, 2], baseFret: 2, desc: 'Barre (E-shape)' },
      { frets: ['X', 9, 11, 11, 11, 9], baseFret: 9, desc: 'Barre (A-shape)' }
    ],
    'Gb': [
      { frets: [2, 4, 4, 3, 2, 2], baseFret: 2, desc: 'Barre (E-shape)' },
      { frets: ['X', 9, 11, 11, 11, 9], baseFret: 9, desc: 'Barre (A-shape)' }
    ],
    'F#7': [
      { frets: [2, 4, 2, 3, 2, 2], baseFret: 2, desc: 'Barre (E7-shape)' },
      { frets: ['X', 9, 11, 9, 11, 9], baseFret: 9, desc: 'Barre (A7-shape)' },
      { frets: [2, 'X', 2, 3, 2, 'X'], baseFret: 2, desc: 'Shell (2fr)' }
    ],
    'Gb7': [
      { frets: [2, 4, 2, 3, 2, 2], baseFret: 2, desc: 'Barre (E7-shape)' },
      { frets: ['X', 9, 11, 9, 11, 9], baseFret: 9, desc: 'Barre (A7-shape)' }
    ],
    'F#maj7': [
      { frets: [2, 4, 3, 3, 2, 2], baseFret: 2, desc: 'Barre (Emaj7-shape)' },
      { frets: ['X', 9, 11, 10, 11, 9], baseFret: 9, desc: 'Barre (Amaj7-shape)' }
    ],
    'Gbmaj7': [
      { frets: [2, 4, 3, 3, 2, 2], baseFret: 2, desc: 'Barre (Emaj7-shape)' },
      { frets: ['X', 9, 11, 10, 11, 9], baseFret: 9, desc: 'Barre (Amaj7-shape)' }
    ],
    'F#m': [
      { frets: [2, 4, 4, 2, 2, 2], baseFret: 2, desc: 'Barre (Em-shape)' },
      { frets: ['X', 9, 11, 11, 10, 9], baseFret: 9, desc: 'Barre (Am-shape)' }
    ],
    'Gbm': [
      { frets: [2, 4, 4, 2, 2, 2], baseFret: 2, desc: 'Barre (Em-shape)' },
      { frets: ['X', 9, 11, 11, 10, 9], baseFret: 9, desc: 'Barre (Am-shape)' }
    ],
    'F#m7': [
      { frets: [2, 4, 2, 2, 2, 2], baseFret: 2, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 9, 11, 9, 10, 9], baseFret: 9, desc: 'Barre (Am7-shape)' }
    ],
    'Gbm7': [
      { frets: [2, 4, 2, 2, 2, 2], baseFret: 2, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 9, 11, 9, 10, 9], baseFret: 9, desc: 'Barre (Am7-shape)' }
    ],
    'G#': [
      { frets: [4, 6, 6, 5, 4, 4], baseFret: 4, desc: 'Barre (E-shape)' },
      { frets: ['X', 11, 13, 13, 13, 11], baseFret: 11, desc: 'Barre (A-shape)' }
    ],
    'G#7': [
      { frets: [4, 6, 4, 5, 4, 4], baseFret: 4, desc: 'Barre (E7-shape)' },
      { frets: ['X', 11, 13, 11, 13, 11], baseFret: 11, desc: 'Barre (A7-shape)' }
    ],
    'G#m': [
      { frets: [4, 6, 6, 4, 4, 4], baseFret: 4, desc: 'Barre (Em-shape)' },
      { frets: ['X', 11, 13, 13, 12, 11], baseFret: 11, desc: 'Barre (Am-shape)' }
    ],
    'G#m7': [
      { frets: [4, 6, 4, 4, 4, 4], baseFret: 4, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 11, 13, 11, 12, 11], baseFret: 11, desc: 'Barre (Am7-shape)' },
      { frets: [4, 'X', 4, 4, 4, 'X'], baseFret: 4, desc: 'Shell (4fr)' }
    ],
    'G#maj7': [
      { frets: [4, 6, 5, 5, 4, 4], baseFret: 4, desc: 'Barre (Emaj7-shape)' },
      { frets: ['X', 11, 13, 12, 13, 11], baseFret: 11, desc: 'Barre (Amaj7-shape)' }
    ],
    'C#': [
      { frets: ['X', 4, 6, 6, 6, 4], baseFret: 4, desc: 'Barre (A-shape)' },
      { frets: [9, 11, 11, 10, 9, 9], baseFret: 9, desc: 'Barre (E-shape)' }
    ],
    'C#7': [
      { frets: ['X', 4, 6, 4, 6, 4], baseFret: 4, desc: 'Barre (A7-shape)' },
      { frets: [9, 11, 9, 10, 9, 9], baseFret: 9, desc: 'Barre (E7-shape)' }
    ],
    'Db7': [
      { frets: ['X', 4, 6, 4, 6, 4], baseFret: 4, desc: 'Barre (A7-shape)' },
      { frets: [9, 11, 9, 10, 9, 9], baseFret: 9, desc: 'Barre (E7-shape)' }
    ],
    'C#maj7': [
      { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4, desc: 'Barre (Amaj7-shape)' },
      { frets: [9, 11, 10, 10, 9, 9], baseFret: 9, desc: 'Barre (Emaj7-shape)' }
    ],
    'C#m': [
      { frets: ['X', 4, 6, 6, 5, 4], baseFret: 4, desc: 'Barre (Am-shape)' },
      { frets: [9, 11, 11, 9, 9, 9], baseFret: 9, desc: 'Barre (Em-shape)' }
    ],
    'C#m7': [
      { frets: ['X', 4, 6, 4, 5, 4], baseFret: 4, desc: 'Barre (Am7-shape)' },
      { frets: [9, 11, 9, 9, 9, 9], baseFret: 9, desc: 'Barre (Em7-shape)' }
    ],
    'D#7': [
      { frets: ['X', 6, 8, 6, 8, 6], baseFret: 6, desc: 'Barre (A7-shape)' },
      { frets: [11, 13, 11, 12, 11, 11], baseFret: 11, desc: 'Barre (E7-shape)' }
    ],
    'A#7': [
      { frets: ['X', 1, 3, 1, 3, 1], baseFret: 1, desc: 'Barre (A7-shape)' },
      { frets: [6, 8, 6, 7, 6, 6], baseFret: 6, desc: 'Barre (E7-shape)' }
    ],
    'A#m7': [
      { frets: ['X', 1, 3, 1, 2, 1], baseFret: 1, desc: 'Barre (Am7-shape)' },
      { frets: [6, 8, 6, 6, 6, 6], baseFret: 6, desc: 'Barre (Em7-shape)' }
    ],
    'D#m7': [
      { frets: ['X', 6, 8, 6, 7, 6], baseFret: 6, desc: 'Barre (Am7-shape)' },
      { frets: [11, 13, 11, 11, 11, 11], baseFret: 11, desc: 'Barre (Em7-shape)' }
    ],
    'Db': [
      { frets: ['X', 4, 6, 6, 6, 4], baseFret: 4, desc: 'Barre (A-shape)' },
      { frets: [9, 11, 11, 10, 9, 9], baseFret: 9, desc: 'Barre (E-shape)' }
    ],
    'Edim': [
      { frets: ['X', 'X', 2, 3, 2, 3], baseFret: 1, desc: 'Position 1' },
      { frets: ['X', 7, 8, 9, 8, 'X'], baseFret: 7, desc: 'Position 2' }
    ],
    'Edim7': [
      { frets: ['X', 'X', 2, 3, 2, 3], baseFret: 1, desc: 'Position 1' },
      { frets: ['X', 7, 8, 6, 8, 'X'], baseFret: 6, desc: 'Position 2' }
    ],
    'Bdim': [
      { frets: ['X', 2, 3, 4, 3, 'X'], baseFret: 2, desc: 'Position 1' },
      { frets: ['X', 'X', 0, 4, 3, 1], baseFret: 1, desc: 'Position 2' }
    ],
    'Abm': [
      { frets: [4, 6, 6, 4, 4, 4], baseFret: 4, desc: 'Barre (Em-shape)' },
      { frets: ['X', 11, 13, 13, 12, 11], baseFret: 11, desc: 'Barre (Am-shape)' }
    ],
    'Abm7': [
      { frets: [4, 6, 4, 4, 4, 4], baseFret: 4, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 11, 13, 11, 12, 11], baseFret: 11, desc: 'Barre (Am7-shape)' }
    ],
    'Ebm': [
      { frets: ['X', 6, 8, 8, 7, 6], baseFret: 6, desc: 'Barre (Am-shape)' },
      { frets: [11, 13, 13, 11, 11, 11], baseFret: 11, desc: 'Barre (Em-shape)' }
    ],
    'Ebm7': [
      { frets: ['X', 6, 8, 6, 7, 6], baseFret: 6, desc: 'Barre (Am7-shape)' },
      { frets: [11, 13, 11, 11, 11, 11], baseFret: 11, desc: 'Barre (Em7-shape)' }
    ],
    'Gm': [
      { frets: [3, 5, 5, 3, 3, 3], baseFret: 3, desc: 'Barre (Em-shape)' },
      { frets: ['X', 10, 12, 12, 11, 10], baseFret: 10, desc: 'Barre (Am-shape)' }
    ],
    'Gm7': [
      { frets: [3, 5, 3, 3, 3, 3], baseFret: 3, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 10, 12, 10, 11, 10], baseFret: 10, desc: 'Barre (Am7-shape)' }
    ],
    'Cm': [
      { frets: ['X', 3, 5, 5, 4, 3], baseFret: 3, desc: 'Barre (Am-shape)' },
      { frets: [8, 10, 10, 8, 8, 8], baseFret: 8, desc: 'Barre (Em-shape)' }
    ],
    'Cm7': [
      { frets: ['X', 3, 5, 3, 4, 3], baseFret: 3, desc: 'Barre (Am7-shape)' },
      { frets: [8, 10, 8, 8, 8, 8], baseFret: 8, desc: 'Barre (Em7-shape)' }
    ],
    'Fm': [
      { frets: [1, 3, 3, 1, 1, 1], baseFret: 1, desc: 'Barre (Em-shape)' },
      { frets: ['X', 8, 10, 10, 9, 8], baseFret: 8, desc: 'Barre (Am-shape)' }
    ],
    'Fm7': [
      { frets: [1, 3, 1, 1, 1, 1], baseFret: 1, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 8, 10, 8, 9, 8], baseFret: 8, desc: 'Barre (Am7-shape)' }
    ],
    'F#m7b5': [
      { frets: [2, 'X', 2, 2, 1, 'X'], baseFret: 2, desc: 'Position 1' },
      { frets: ['X', 9, 10, 9, 10, 'X'], baseFret: 9, desc: 'Position 2' }
    ],
    'C7': [
      { frets: ['X', 3, 2, 3, 1, 0], baseFret: 1, desc: 'Open C7' },
      { frets: ['X', 3, 5, 3, 5, 3], baseFret: 3, desc: 'Barre (A7-shape)' },
      { frets: [8, 10, 8, 9, 8, 8], baseFret: 8, desc: 'Barre (E7-shape)' }
    ],
    'G7': [
      { frets: [3, 2, 0, 0, 0, 1], baseFret: 1, desc: 'Open G7' },
      { frets: [3, 5, 3, 4, 3, 3], baseFret: 3, desc: 'Barre (E7-shape)' },
      { frets: ['X', 10, 12, 10, 12, 10], baseFret: 10, desc: 'Barre (A7-shape)' }
    ],
    'D7': [
      { frets: ['X', 'X', 0, 2, 1, 2], baseFret: 1, desc: 'Open D7' },
      { frets: ['X', 5, 7, 5, 7, 5], baseFret: 5, desc: 'Barre (A7-shape)' },
      { frets: [10, 12, 10, 11, 10, 10], baseFret: 10, desc: 'Barre (E7-shape)' }
    ],
    'A7': [
      { frets: ['X', 0, 2, 0, 2, 0], baseFret: 1, desc: 'Open A7' },
      { frets: [5, 7, 5, 6, 5, 5], baseFret: 5, desc: 'Barre (E7-shape)' },
      { frets: ['X', 12, 14, 12, 14, 12], baseFret: 12, desc: 'Barre (A7-shape)' }
    ],
    'E7': [
      { frets: [0, 2, 0, 1, 0, 0], baseFret: 1, desc: 'Open E7' },
      { frets: ['X', 7, 9, 7, 9, 7], baseFret: 7, desc: 'Barre (A7-shape)' },
      { frets: [12, 14, 12, 13, 12, 12], baseFret: 12, desc: 'Barre (E7-shape)' }
    ],
    'B7': [
      { frets: ['X', 2, 1, 2, 0, 2], baseFret: 1, desc: 'Open B7' },
      { frets: [7, 9, 7, 8, 7, 7], baseFret: 7, desc: 'Barre (E7-shape)' }
    ],
    'Cmaj7': [
      { frets: ['X', 3, 2, 0, 0, 0], baseFret: 1, desc: 'Open Cmaj7' },
      { frets: ['X', 3, 5, 4, 5, 3], baseFret: 3, desc: 'Barre (Amaj7-shape)' },
      { frets: [8, 10, 9, 9, 8, 8], baseFret: 8, desc: 'Barre (Emaj7-shape)' }
    ],
    'Fmaj7': [
      { frets: ['X', 'X', 3, 2, 1, 0], baseFret: 1, desc: 'Open Fmaj7' },
      { frets: [1, 3, 2, 2, 1, 1], baseFret: 1, desc: 'Barre Fmaj7' },
      { frets: ['X', 8, 10, 9, 10, 8], baseFret: 8, desc: 'Barre (Amaj7-shape)' }
    ],
    'Gmaj7': [
      { frets: [3, 2, 0, 0, 0, 2], baseFret: 1, desc: 'Open Gmaj7' },
      { frets: [3, 'X', 4, 4, 3, 'X'], baseFret: 3, desc: 'Jazz Gmaj7' },
      { frets: ['X', 10, 12, 11, 12, 10], baseFret: 10, desc: 'Barre (Amaj7-shape)' }
    ],
    'Dmaj7': [
      { frets: ['X', 'X', 0, 2, 2, 2], baseFret: 1, desc: 'Open Dmaj7' },
      { frets: ['X', 5, 7, 6, 7, 5], baseFret: 5, desc: 'Barre (Amaj7-shape)' }
    ],
    'Amaj7': [
      { frets: ['X', 0, 2, 1, 2, 0], baseFret: 1, desc: 'Open Amaj7' },
      { frets: [5, 7, 6, 6, 5, 5], baseFret: 5, desc: 'Barre (Emaj7-shape)' }
    ],
    'Emaj7': [
      { frets: [0, 2, 1, 1, 0, 0], baseFret: 1, desc: 'Open Emaj7' },
      { frets: ['X', 7, 9, 8, 9, 7], baseFret: 7, desc: 'Barre (Amaj7-shape)' }
    ],
    'Bbmaj7': [
      { frets: ['X', 1, 3, 2, 3, 1], baseFret: 1, desc: 'Barre (Amaj7-shape)' },
      { frets: [6, 8, 7, 7, 6, 6], baseFret: 6, desc: 'Barre (Emaj7-shape)' }
    ],
    'Ebmaj7': [
      { frets: ['X', 6, 8, 7, 8, 6], baseFret: 6, desc: 'Barre (Amaj7-shape)' },
      { frets: ['X', 6, 5, 3, 3, 3], baseFret: 3, desc: 'Compact Ebmaj7' }
    ],
    'Abmaj7': [
      { frets: [4, 6, 5, 5, 4, 4], baseFret: 4, desc: 'Barre (Emaj7-shape)' },
      { frets: [4, 'X', 5, 5, 4, 'X'], baseFret: 4, desc: 'Jazz Shell (4fr)' }
    ],
    'Dm7': [
      { frets: ['X', 'X', 0, 2, 1, 1], baseFret: 1, desc: 'Open Dm7' },
      { frets: ['X', 5, 7, 5, 6, 5], baseFret: 5, desc: 'Barre (Am7-shape)' },
      { frets: [10, 12, 10, 10, 10, 10], baseFret: 10, desc: 'Barre (Em7-shape)' }
    ],
    'Am7': [
      { frets: ['X', 0, 2, 0, 1, 0], baseFret: 1, desc: 'Open Am7' },
      { frets: [5, 7, 5, 5, 5, 5], baseFret: 5, desc: 'Barre (Em7-shape)' },
      { frets: ['X', 0, 2, 2, 1, 3], baseFret: 1, desc: 'Open Am7 (G top)' }
    ],
    'Em7': [
      { frets: [0, 2, 0, 0, 0, 0], baseFret: 1, desc: 'Open Em7' },
      { frets: [0, 2, 2, 0, 3, 0], baseFret: 1, desc: 'Open Em7 (D on B)' },
      { frets: ['X', 7, 9, 7, 8, 7], baseFret: 7, desc: 'Barre (Am7-shape)' }
    ],
    'Bm7': [
      { frets: ['X', 2, 4, 2, 3, 2], baseFret: 2, desc: 'Barre (Am7-shape)' },
      { frets: [7, 9, 7, 7, 7, 7], baseFret: 7, desc: 'Barre (Em7-shape)' }
    ],
    'Bbm7': [
      { frets: ['X', 1, 3, 1, 2, 1], baseFret: 1, desc: 'Barre (Am7-shape)' },
      { frets: [6, 8, 6, 6, 6, 6], baseFret: 6, desc: 'Barre (Em7-shape)' }
    ],
    'C#maj7': [
      { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4, desc: 'Barre (Amaj7-shape)' },
      { frets: [9, 11, 10, 10, 9, 9], baseFret: 9, desc: 'Barre (Emaj7-shape)' }
    ],
    'Dbmaj7': [
      { frets: ['X', 4, 6, 5, 6, 4], baseFret: 4, desc: 'Barre (Amaj7-shape)' },
      { frets: [9, 11, 10, 10, 9, 9], baseFret: 9, desc: 'Barre (Emaj7-shape)' }
    ],
    'A13': [
      { frets: [5, 'X', 5, 6, 7, 5], baseFret: 5, desc: 'Position 1' },
      { frets: ['X', 0, 5, 6, 7, 5], baseFret: 5, desc: 'Position 2' }
    ],
    'G13': [
      { frets: [3, 'X', 3, 4, 5, 3], baseFret: 3, desc: 'Position 1' },
      { frets: ['X', 10, 9, 10, 12, 12], baseFret: 9, desc: 'Position 2' }
    ],
    'Cadd9': [
      { frets: ['X', 3, 2, 0, 3, 0], baseFret: 1, desc: 'Open Cadd9' },
      { frets: [8, 10, 10, 9, 8, 10], baseFret: 8, desc: 'Barre Cadd9' }
    ],
    'Dadd9': [
      { frets: ['X', 'X', 0, 2, 5, 2], baseFret: 1, desc: 'Open Dadd9' },
      { frets: ['X', 5, 4, 2, 3, 0], baseFret: 1, desc: 'Jazz Dadd9' }
    ],
    'Eadd9': [
      { frets: [0, 2, 2, 1, 0, 2], baseFret: 1, desc: 'Open Eadd9' }
    ],
    'Fadd9': [
      { frets: [1, 3, 3, 0, 1, 1], baseFret: 1, desc: 'Fadd9' }
    ],
    'Gadd9': [
      { frets: [3, 2, 0, 2, 0, 3], baseFret: 1, desc: 'Open Gadd9' },
      { frets: [3, 0, 0, 0, 0, 5], baseFret: 1, desc: 'Open Gadd9 (High A)' }
    ],
    'Aadd9': [
      { frets: ['X', 0, 2, 4, 2, 0], baseFret: 1, desc: 'Open Aadd9' }
    ],
    'Badd9': [
      { frets: ['X', 2, 4, 4, 2, 2], baseFret: 2, desc: 'Barre Badd9' }
    ],
    'C9': [
      { frets: ['X', 3, 2, 3, 3, 3], baseFret: 3, desc: 'Barre (A9-shape)' },
      { frets: [8, 10, 8, 9, 8, 10], baseFret: 8, desc: 'Barre (E9-shape)' },
      { frets: ['X', 3, 2, 3, 3, 'X'], baseFret: 2, desc: 'Funk Shell C9' }
    ],
    'D9': [
      { frets: ['X', 5, 4, 5, 5, 5], baseFret: 5, desc: 'Barre (A9-shape)' },
      { frets: ['X', 'X', 0, 2, 1, 0], baseFret: 1, desc: 'Open D9' },
      { frets: [10, 12, 10, 11, 10, 12], baseFret: 10, desc: 'Barre (E9-shape)' }
    ],
    'E9': [
      { frets: [0, 2, 0, 1, 0, 2], baseFret: 1, desc: 'Open E9' },
      { frets: ['X', 7, 6, 7, 7, 7], baseFret: 7, desc: 'Barre (A9-shape)' }
    ],
    'F9': [
      { frets: ['X', 8, 7, 8, 8, 8], baseFret: 8, desc: 'Barre (A9-shape)' },
      { frets: [1, 3, 1, 2, 1, 3], baseFret: 1, desc: 'Barre (E9-shape)' }
    ],
    'G9': [
      { frets: [3, 2, 0, 0, 0, 1], baseFret: 1, desc: 'Open G9' },
      { frets: ['X', 10, 9, 10, 10, 10], baseFret: 10, desc: 'Barre (A9-shape)' },
      { frets: [3, 5, 3, 4, 3, 5], baseFret: 3, desc: 'Barre (E9-shape)' }
    ],
    'A9': [
      { frets: ['X', 0, 2, 4, 2, 3], baseFret: 1, desc: 'Open A9' },
      { frets: ['X', 12, 11, 12, 12, 12], baseFret: 12, desc: 'Barre (A9-shape)' },
      { frets: [5, 7, 5, 6, 5, 7], baseFret: 5, desc: 'Barre (E9-shape)' }
    ],
    'B9': [
      { frets: ['X', 2, 1, 2, 2, 2], baseFret: 2, desc: 'Barre (A9-shape)' },
      { frets: [7, 9, 7, 8, 7, 9], baseFret: 7, desc: 'Barre (E9-shape)' }
    ],
    'Bb9': [
      { frets: ['X', 1, 0, 1, 1, 1], baseFret: 1, desc: 'Barre (A9-shape)' },
      { frets: [6, 8, 6, 7, 6, 8], baseFret: 6, desc: 'Barre (E9-shape)' }
    ],
    'Eb9': [
      { frets: ['X', 6, 5, 6, 6, 6], baseFret: 6, desc: 'Barre (A9-shape)' }
    ],
    'Ab9': [
      { frets: [4, 6, 4, 5, 4, 6], baseFret: 4, desc: 'Barre (E9-shape)' },
      { frets: ['X', 11, 10, 11, 11, 11], baseFret: 11, desc: 'Barre (A9-shape)' }
    ],
    'Db9': [
      { frets: ['X', 4, 3, 4, 4, 4], baseFret: 4, desc: 'Barre (A9-shape)' }
    ],
    'C#9': [
      { frets: ['X', 4, 3, 4, 4, 4], baseFret: 4, desc: 'Barre (A9-shape)' }
    ],
    'F#9': [
      { frets: [2, 4, 2, 3, 2, 4], baseFret: 2, desc: 'Barre (E9-shape)' },
      { frets: ['X', 9, 8, 9, 9, 9], baseFret: 9, desc: 'Barre (A9-shape)' }
    ],
    'Gb9': [
      { frets: [2, 4, 2, 3, 2, 4], baseFret: 2, desc: 'Barre (E9-shape)' },
      { frets: ['X', 9, 8, 9, 9, 9], baseFret: 9, desc: 'Barre (A9-shape)' }
    ],
    'Cmaj9': [
      { frets: ['X', 3, 2, 4, 3, 'X'], baseFret: 2, desc: 'Jazz Open Cmaj9' },
      { frets: ['X', 3, 5, 4, 3, 3], baseFret: 3, desc: 'Barre Cmaj9' }
    ],
    'Dmaj9': [
      { frets: ['X', 'X', 0, 2, 2, 0], baseFret: 1, desc: 'Open Dmaj9' },
      { frets: ['X', 5, 4, 6, 5, 'X'], baseFret: 4, desc: 'Barre Dmaj9' }
    ],
    'Emaj9': [
      { frets: [0, 2, 1, 1, 0, 2], baseFret: 1, desc: 'Open Emaj9' },
      { frets: ['X', 7, 6, 8, 7, 'X'], baseFret: 6, desc: 'Barre Emaj9' }
    ],
    'Fmaj9': [
      { frets: ['X', 'X', 3, 0, 1, 0], baseFret: 1, desc: 'Open Fmaj9' },
      { frets: ['X', 8, 7, 9, 8, 'X'], baseFret: 7, desc: 'Barre Fmaj9' }
    ],
    'Gmaj9': [
      { frets: [3, 'X', 0, 2, 0, 2], baseFret: 1, desc: 'Open Gmaj9' },
      { frets: ['X', 10, 9, 11, 10, 'X'], baseFret: 9, desc: 'Barre Gmaj9' }
    ],
    'Amaj9': [
      { frets: ['X', 0, 2, 1, 0, 0], baseFret: 1, desc: 'Open Amaj9' },
      { frets: [5, 'X', 6, 4, 5, 'X'], baseFret: 4, desc: 'Barre Amaj9' }
    ],
    'Bmaj9': [
      { frets: ['X', 2, 1, 3, 2, 'X'], baseFret: 1, desc: 'Jazz Bmaj9' },
      { frets: [7, 'X', 8, 6, 7, 'X'], baseFret: 6, desc: 'Barre Bmaj9' }
    ],
    'Bbmaj9': [
      { frets: ['X', 1, 0, 2, 1, 'X'], baseFret: 1, desc: 'Jazz Bbmaj9' }
    ],
    'Ebmaj9': [
      { frets: ['X', 6, 5, 7, 6, 'X'], baseFret: 5, desc: 'Barre Ebmaj9' }
    ],
    'Abmaj9': [
      { frets: [4, 'X', 5, 3, 4, 'X'], baseFret: 3, desc: 'Jazz Abmaj9' }
    ],
    'F#maj9': [
      { frets: [2, 'X', 3, 1, 2, 'X'], baseFret: 1, desc: 'Jazz F#maj9' }
    ],
    'Gbmaj9': [
      { frets: [2, 'X', 3, 1, 2, 'X'], baseFret: 1, desc: 'Jazz Gbmaj9' }
    ],
    'Am9': [
      { frets: ['X', 0, 2, 4, 1, 0], baseFret: 1, desc: 'Open Am9' },
      { frets: [5, 7, 5, 5, 5, 7], baseFret: 5, desc: 'Barre (Em9-shape)' }
    ],
    'Dm9': [
      { frets: ['X', 5, 3, 5, 5, 'X'], baseFret: 3, desc: 'Jazz Dm9' },
      { frets: ['X', 'X', 0, 2, 1, 0], baseFret: 1, desc: 'Open Dm9' },
      { frets: [10, 12, 10, 10, 10, 12], baseFret: 10, desc: 'Barre (Em9-shape)' }
    ],
    'Em9': [
      { frets: [0, 2, 0, 0, 0, 2], baseFret: 1, desc: 'Open Em9' },
      { frets: [0, 2, 2, 0, 3, 2], baseFret: 1, desc: 'Rich Open Em9' },
      { frets: ['X', 7, 5, 7, 7, 'X'], baseFret: 5, desc: 'Barre (Am9-shape)' }
    ],
    'Bm9': [
      { frets: ['X', 2, 0, 2, 2, 2], baseFret: 1, desc: 'Open Bm9' },
      { frets: ['X', 2, 4, 2, 3, 2], baseFret: 2, desc: 'Barre Bm9' },
      { frets: [7, 9, 7, 7, 7, 9], baseFret: 7, desc: 'Barre (Em9-shape)' }
    ],
    'Cm9': [
      { frets: ['X', 3, 1, 3, 3, 'X'], baseFret: 1, desc: 'Jazz Cm9' },
      { frets: [8, 10, 8, 8, 8, 10], baseFret: 8, desc: 'Barre (Em9-shape)' }
    ],
    'Fm9': [
      { frets: [1, 3, 1, 1, 1, 3], baseFret: 1, desc: 'Barre Fm9' },
      { frets: ['X', 8, 6, 8, 8, 'X'], baseFret: 6, desc: 'Barre (Am9-shape)' }
    ],
    'Gm9': [
      { frets: [3, 5, 3, 3, 3, 5], baseFret: 3, desc: 'Barre Gm9' },
      { frets: ['X', 10, 8, 10, 10, 'X'], baseFret: 8, desc: 'Barre (Am9-shape)' }
    ],
    'F#m9': [
      { frets: [2, 4, 2, 2, 2, 4], baseFret: 2, desc: 'Barre F#m9' },
      { frets: ['X', 9, 7, 9, 9, 'X'], baseFret: 7, desc: 'Barre (Am9-shape)' }
    ],
    'Gbm9': [
      { frets: [2, 4, 2, 2, 2, 4], baseFret: 2, desc: 'Barre Gbm9' },
      { frets: ['X', 9, 7, 9, 9, 'X'], baseFret: 7, desc: 'Barre (Am9-shape)' }
    ],
    'C#m9': [
      { frets: ['X', 4, 2, 4, 4, 'X'], baseFret: 2, desc: 'Barre C#m9' },
      { frets: [9, 11, 9, 9, 9, 11], baseFret: 9, desc: 'Barre (Em9-shape)' }
    ],
    'Dbm9': [
      { frets: ['X', 4, 2, 4, 4, 'X'], baseFret: 2, desc: 'Barre Dbm9' }
    ],
    'G#m9': [
      { frets: [4, 6, 4, 4, 4, 6], baseFret: 4, desc: 'Barre G#m9' },
      { frets: ['X', 11, 9, 11, 11, 'X'], baseFret: 9, desc: 'Barre (Am9-shape)' }
    ],
    'Abm9': [
      { frets: [4, 6, 4, 4, 4, 6], baseFret: 4, desc: 'Barre Abm9' },
      { frets: ['X', 11, 9, 11, 11, 'X'], baseFret: 9, desc: 'Barre (Am9-shape)' }
    ],
    'Bbm9': [
      { frets: ['X', 1, 3, 1, 1, 1], baseFret: 1, desc: 'Barre Bbm9' },
      { frets: [6, 8, 6, 6, 6, 8], baseFret: 6, desc: 'Barre (Em9-shape)' }
    ],
    'Ebm9': [
      { frets: ['X', 6, 4, 6, 6, 'X'], baseFret: 4, desc: 'Barre Ebm9' }
    ],
    'Csus4': [
      { frets: ['X', 3, 3, 0, 1, 1], baseFret: 1, desc: 'Open Csus4' },
      { frets: ['X', 3, 5, 5, 6, 3], baseFret: 3, desc: 'Barre (Asus4-shape)' }
    ],
    'Dsus4': [
      { frets: ['X', 'X', 0, 2, 3, 3], baseFret: 1, desc: 'Open Dsus4' },
      { frets: ['X', 5, 7, 7, 8, 5], baseFret: 5, desc: 'Barre Dsus4' }
    ],
    'Esus4': [
      { frets: [0, 2, 2, 2, 0, 0], baseFret: 1, desc: 'Open Esus4' },
      { frets: ['X', 7, 9, 9, 10, 7], baseFret: 7, desc: 'Barre (Asus4-shape)' }
    ],
    'Fsus4': [
      { frets: [1, 3, 3, 3, 1, 1], baseFret: 1, desc: 'Barre (Esus4-shape)' },
      { frets: ['X', 8, 10, 10, 11, 8], baseFret: 8, desc: 'Barre (Asus4-shape)' }
    ],
    'Gsus4': [
      { frets: [3, 2, 0, 0, 1, 3], baseFret: 1, desc: 'Open Gsus4' },
      { frets: [3, 5, 5, 5, 3, 3], baseFret: 3, desc: 'Barre (Esus4-shape)' }
    ],
    'Asus4': [
      { frets: ['X', 0, 2, 2, 3, 0], baseFret: 1, desc: 'Open Asus4' },
      { frets: [5, 7, 7, 7, 5, 5], baseFret: 5, desc: 'Barre Asus4' }
    ],
    'Bsus4': [
      { frets: ['X', 2, 4, 4, 5, 2], baseFret: 2, desc: 'Barre (Asus4-shape)' },
      { frets: [7, 9, 9, 9, 7, 7], baseFret: 7, desc: 'Barre (Esus4-shape)' }
    ],
    'Bbsus4': [
      { frets: ['X', 1, 3, 3, 4, 1], baseFret: 1, desc: 'Barre (Asus4-shape)' },
      { frets: [6, 8, 8, 8, 6, 6], baseFret: 6, desc: 'Barre (Esus4-shape)' }
    ],
    'F#sus4': [
      { frets: [2, 4, 4, 4, 2, 2], baseFret: 2, desc: 'Barre (Esus4-shape)' },
      { frets: ['X', 9, 11, 11, 12, 9], baseFret: 9, desc: 'Barre (Asus4-shape)' }
    ],
    'Gbsus4': [
      { frets: [2, 4, 4, 4, 2, 2], baseFret: 2, desc: 'Barre (Esus4-shape)' },
      { frets: ['X', 9, 11, 11, 12, 9], baseFret: 9, desc: 'Barre (Asus4-shape)' }
    ],
    'C#sus4': [
      { frets: ['X', 4, 6, 6, 7, 4], baseFret: 4, desc: 'Barre (Asus4-shape)' }
    ],
    'Dbsus4': [
      { frets: ['X', 4, 6, 6, 7, 4], baseFret: 4, desc: 'Barre (Asus4-shape)' }
    ],
    'Ebsus4': [
      { frets: ['X', 6, 8, 8, 9, 6], baseFret: 6, desc: 'Barre (Asus4-shape)' }
    ],
    'Absus4': [
      { frets: [4, 6, 6, 6, 4, 4], baseFret: 4, desc: 'Barre (Esus4-shape)' }
    ],
    'G#sus4': [
      { frets: [4, 6, 6, 6, 4, 4], baseFret: 4, desc: 'Barre (Esus4-shape)' }
    ],
    'Csus2': [
      { frets: ['X', 3, 0, 0, 1, 0], baseFret: 1, desc: 'Open Csus2' },
      { frets: ['X', 3, 5, 5, 3, 3], baseFret: 3, desc: 'Barre Csus2' }
    ],
    'Dsus2': [
      { frets: ['X', 'X', 0, 2, 3, 0], baseFret: 1, desc: 'Open Dsus2' },
      { frets: ['X', 5, 7, 7, 5, 5], baseFret: 5, desc: 'Barre Dsus2' }
    ],
    'Esus2': [
      { frets: [0, 2, 4, 4, 0, 0], baseFret: 1, desc: 'Open Esus2' },
      { frets: ['X', 7, 9, 9, 7, 7], baseFret: 7, desc: 'Barre Esus2' }
    ],
    'Fsus2': [
      { frets: ['X', 'X', 3, 0, 1, 1], baseFret: 1, desc: 'Open Fsus2' },
      { frets: [1, 3, 3, 0, 1, 1], baseFret: 1, desc: 'Barre Fsus2' }
    ],
    'Gsus2': [
      { frets: [3, 0, 0, 0, 3, 3], baseFret: 1, desc: 'Open Gsus2' },
      { frets: ['X', 10, 12, 12, 10, 10], baseFret: 10, desc: 'Barre Gsus2' }
    ],
    'Asus2': [
      { frets: ['X', 0, 2, 2, 0, 0], baseFret: 1, desc: 'Open Asus2' },
      { frets: ['X', 12, 14, 14, 12, 12], baseFret: 12, desc: 'Barre Asus2' }
    ],
    'Bsus2': [
      { frets: ['X', 2, 4, 4, 2, 2], baseFret: 2, desc: 'Barre Bsus2' }
    ],
    'Bbsus2': [
      { frets: ['X', 1, 3, 3, 1, 1], baseFret: 1, desc: 'Barre Bbsus2' }
    ],
    'F#sus2': [
      { frets: ['X', 9, 11, 11, 9, 9], baseFret: 9, desc: 'Barre F#sus2' },
      { frets: [2, 4, 4, 1, 2, 2], baseFret: 1, desc: 'Barre F#sus2' }
    ],
    'Gbsus2': [
      { frets: ['X', 9, 11, 11, 9, 9], baseFret: 9, desc: 'Barre Gbsus2' }
    ],
    'C#sus2': [
      { frets: ['X', 4, 6, 6, 4, 4], baseFret: 4, desc: 'Barre C#sus2' }
    ],
    'Dbsus2': [
      { frets: ['X', 4, 6, 6, 4, 4], baseFret: 4, desc: 'Barre Dbsus2' }
    ],
    'Ebsus2': [
      { frets: ['X', 6, 8, 8, 6, 6], baseFret: 6, desc: 'Barre Ebsus2' }
    ],
    'C7sus4': [
      { frets: ['X', 3, 5, 3, 6, 3], baseFret: 3, desc: 'Barre C7sus4' }
    ],
    'D7sus4': [
      { frets: ['X', 'X', 0, 2, 1, 3], baseFret: 1, desc: 'Open D7sus4' }
    ],
    'E7sus4': [
      { frets: [0, 2, 0, 2, 0, 0], baseFret: 1, desc: 'Open E7sus4' }
    ],
    'G7sus4': [
      { frets: [3, 3, 0, 0, 1, 1], baseFret: 1, desc: 'Open G7sus4' }
    ],
    'A7sus4': [
      { frets: ['X', 0, 2, 0, 3, 0], baseFret: 1, desc: 'Open A7sus4' }
    ],
    'B7sus4': [
      { frets: ['X', 2, 4, 2, 5, 2], baseFret: 2, desc: 'Barre B7sus4' }
    ]
  };

  // Map backward compatibility lookup
  const GUITAR_DATABASE = {};
  Object.keys(GUITAR_VOICINGS_DATABASE).forEach(k => {
    GUITAR_DATABASE[k] = GUITAR_VOICINGS_DATABASE[k][0];
  });

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
    'Eb': { frets: [3, 3, 3, 1], baseFret: 1 },
    'F#m': { frets: [2, 1, 2, 0], baseFret: 1 },
    'F#m7': { frets: [2, 1, 2, 4], baseFret: 1 },
    'C#m': { frets: [1, 4, 4, 4], baseFret: 1 },
    'C#m7': { frets: [1, 4, 0, 4], baseFret: 1 },
    'Edim': { frets: [0, 1, 3, 1], baseFret: 1 },
    'Abm': { frets: [1, 3, 4, 2], baseFret: 1 },
    'Abm7': { frets: [1, 3, 2, 2], baseFret: 1 },
    'Ebm': { frets: [3, 3, 2, 1], baseFret: 1 },
    'Gm': { frets: [0, 2, 3, 1], baseFret: 1 }
  };

  // Bass Root Fretboard Positions (E, A, D, G strings)
  const BASS_ROOTS = {
    'E': [
      { str: 'E', fret: 0, text: 'Open E string (1/3)' },
      { str: 'A', fret: 7, text: 'Fret 7 on A string (2/3)' },
      { str: 'D', fret: 2, text: 'Fret 2 on D string (3/3)' }
    ],
    'F': [
      { str: 'E', fret: 1, text: 'Fret 1 on E string (1/3)' },
      { str: 'A', fret: 8, text: 'Fret 8 on A string (2/3)' },
      { str: 'D', fret: 3, text: 'Fret 3 on D string (3/3)' }
    ],
    'F#': [
      { str: 'E', fret: 2, text: 'Fret 2 on E string (1/3)' },
      { str: 'A', fret: 9, text: 'Fret 9 on A string (2/3)' },
      { str: 'D', fret: 4, text: 'Fret 4 on D string (3/3)' }
    ],
    'G': [
      { str: 'E', fret: 3, text: 'Fret 3 on E string (1/3)' },
      { str: 'A', fret: 10, text: 'Fret 10 on A string (2/3)' },
      { str: 'G', fret: 0, text: 'Open G string (3/3)' }
    ],
    'G#': [
      { str: 'E', fret: 4, text: 'Fret 4 on E string (1/3)' },
      { str: 'A', fret: 11, text: 'Fret 11 on A string (2/3)' },
      { str: 'G', fret: 1, text: 'Fret 1 on G string (3/3)' }
    ],
    'A': [
      { str: 'A', fret: 0, text: 'Open A string (1/3)' },
      { str: 'E', fret: 5, text: 'Fret 5 on E string (2/3)' },
      { str: 'D', fret: 7, text: 'Fret 7 on D string (3/3)' }
    ],
    'A#': [
      { str: 'A', fret: 1, text: 'Fret 1 on A string (1/3)' },
      { str: 'E', fret: 6, text: 'Fret 6 on E string (2/3)' },
      { str: 'D', fret: 8, text: 'Fret 8 on D string (3/3)' }
    ],
    'B': [
      { str: 'A', fret: 2, text: 'Fret 2 on A string (1/3)' },
      { str: 'E', fret: 7, text: 'Fret 7 on E string (2/3)' },
      { str: 'D', fret: 9, text: 'Fret 9 on D string (3/3)' }
    ],
    'C': [
      { str: 'A', fret: 3, text: 'Fret 3 on A string (1/3)' },
      { str: 'E', fret: 8, text: 'Fret 8 on E string (2/3)' },
      { str: 'D', fret: 10, text: 'Fret 10 on D string (3/3)' }
    ],
    'C#': [
      { str: 'A', fret: 4, text: 'Fret 4 on A string (1/3)' },
      { str: 'E', fret: 9, text: 'Fret 9 on E string (2/3)' },
      { str: 'D', fret: 11, text: 'Fret 11 on D string (3/3)' }
    ],
    'D': [
      { str: 'D', fret: 0, text: 'Open D string (1/3)' },
      { str: 'A', fret: 5, text: 'Fret 5 on A string (2/3)' },
      { str: 'G', fret: 7, text: 'Fret 7 on G string (3/3)' }
    ],
    'D#': [
      { str: 'D', fret: 1, text: 'Fret 1 on D string (1/3)' },
      { str: 'A', fret: 6, text: 'Fret 6 on A string (2/3)' },
      { str: 'G', fret: 8, text: 'Fret 8 on G string (3/3)' }
    ]
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

  function renderBassSvg(chordObj, posIndex = 0) {
    const rootName = chordObj.slashBass || chordObj.normRoot;
    const positions = BASS_ROOTS[rootName] || [{ str: 'E', fret: 3, text: 'Fret 3 on E string' }];
    const primary = positions[posIndex % positions.length];

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

  function getEnharmonicRoots(r) {
    if (!r) return [];
    const directMap = {
      'C#': 'Db', 'Db': 'C#',
      'D#': 'Eb', 'Eb': 'D#',
      'F#': 'Gb', 'Gb': 'F#',
      'G#': 'Ab', 'Ab': 'G#',
      'A#': 'Bb', 'Bb': 'A#',
      'B#': 'C',  'C': 'B#',
      'E#': 'F',  'F': 'E#',
      'Cb': 'B',  'B': 'Cb',
      'Fb': 'E',  'E': 'Fb'
    };
    const set = new Set();
    set.add(r);
    if (directMap[r]) set.add(directMap[r]);
    if (directMap[r.toUpperCase()]) set.add(directMap[r.toUpperCase()]);
    const norm = ENHARMONIC_MAP[r.toUpperCase()];
    if (norm) {
      set.add(norm);
      if (directMap[norm]) set.add(directMap[norm]);
    }
    return Array.from(set);
  }

  // Multiple Voicing Selector and Generator
  function getGuitarVoicingsList(chordObj) {
    if (!chordObj) return [{ frets: ['X', 0, 2, 2, 2, 0], baseFret: 1, desc: 'Standard' }];

    const roots = getEnharmonicRoots(chordObj.root);
    if (chordObj.normRoot && !roots.includes(chordObj.normRoot)) roots.push(chordObj.normRoot);

    // 1. Direct match on raw, or root + qualKey across all enharmonic root names
    if (GUITAR_VOICINGS_DATABASE[chordObj.raw]) return GUITAR_VOICINGS_DATABASE[chordObj.raw];
    for (const r of roots) {
      if (GUITAR_VOICINGS_DATABASE[r + chordObj.qualKey]) return GUITAR_VOICINGS_DATABASE[r + chordObj.qualKey];
    }

    const qual = (chordObj.qualKey || '').toLowerCase();
    const isMaj7 = qual.includes('maj7') || qual.includes('maj') || qual === 'm7+' || qual === 'δ7' || qual === 'δ';
    const isMinor = !isMaj7 && (qual.includes('min') || qual.includes('-') || /^m(?!aj)/i.test(qual) || (qual.startsWith('m') && !qual.startsWith('maj')));
    const isDim = qual.includes('dim') || qual.includes('°') || qual.includes('ø');
    const is7 = !isMaj7 && qual.includes('7');
    const is9 = qual.includes('9');
    const isMaj9 = qual.includes('maj9') || (isMaj7 && is9);
    const isM9 = !isMaj9 && (isMinor && is9);
    const isAdd9 = qual.includes('add9') || qual.includes('add2');
    const isSus = qual.includes('sus');
    const isSus2 = qual.includes('sus2');
    const isSus4 = qual.includes('sus4') || (isSus && !isSus2);
    const is7sus4 = qual.includes('7sus') || (is7 && isSus);

    // Priority 2: Maj9 chords
    if (isMaj9) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'maj9']) return GUITAR_VOICINGS_DATABASE[r + 'maj9'];
      }
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'maj7']) return GUITAR_VOICINGS_DATABASE[r + 'maj7'];
      }
    }

    // Priority 3: Minor 9th chords
    if (isM9) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'm9']) return GUITAR_VOICINGS_DATABASE[r + 'm9'];
      }
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'm7']) return GUITAR_VOICINGS_DATABASE[r + 'm7'];
      }
    }

    // Priority 4: Dominant 9th & Add9 chords
    if (is9 && !isMaj9 && !isM9) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + '9']) return GUITAR_VOICINGS_DATABASE[r + '9'];
      }
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'add9']) return GUITAR_VOICINGS_DATABASE[r + 'add9'];
      }
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + '7']) return GUITAR_VOICINGS_DATABASE[r + '7'];
      }
    }
    if (isAdd9) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'add9']) return GUITAR_VOICINGS_DATABASE[r + 'add9'];
        if (GUITAR_VOICINGS_DATABASE[r + '9']) return GUITAR_VOICINGS_DATABASE[r + '9'];
      }
    }

    // Priority 5: Sus chords (sus4, sus2, 7sus4)
    if (is7sus4) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + '7sus4']) return GUITAR_VOICINGS_DATABASE[r + '7sus4'];
        if (GUITAR_VOICINGS_DATABASE[r + 'sus4']) return GUITAR_VOICINGS_DATABASE[r + 'sus4'];
      }
    }
    if (isSus4) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'sus4']) return GUITAR_VOICINGS_DATABASE[r + 'sus4'];
      }
    }
    if (isSus2) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'sus2']) return GUITAR_VOICINGS_DATABASE[r + 'sus2'];
      }
    }
    if (isSus) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'sus4']) return GUITAR_VOICINGS_DATABASE[r + 'sus4'];
        if (GUITAR_VOICINGS_DATABASE[r + 'sus2']) return GUITAR_VOICINGS_DATABASE[r + 'sus2'];
      }
    }

    // Priority 6: Maj7 chords
    if (isMaj7) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'maj7']) return GUITAR_VOICINGS_DATABASE[r + 'maj7'];
      }
    }

    // Priority 7: Minor 7th chords
    if (isMinor && is7) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'm7']) return GUITAR_VOICINGS_DATABASE[r + 'm7'];
      }
    }

    // Priority 8: Dominant 7th chords
    if (is7 && !isMinor) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + '7']) return GUITAR_VOICINGS_DATABASE[r + '7'];
      }
    }

    // Priority 9: Minor triads
    if (isMinor) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'm']) return GUITAR_VOICINGS_DATABASE[r + 'm'];
      }
    }

    // Priority 10: Diminished
    if (isDim) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r + 'dim7']) return GUITAR_VOICINGS_DATABASE[r + 'dim7'];
        if (GUITAR_VOICINGS_DATABASE[r + 'dim']) return GUITAR_VOICINGS_DATABASE[r + 'dim'];
        if (GUITAR_VOICINGS_DATABASE[r + 'm7b5']) return GUITAR_VOICINGS_DATABASE[r + 'm7b5'];
      }
    }

    // Priority 11: Plain Major triads ONLY if NOT 7th, 9th, sus, minor, or dim!
    if (!isMinor && !isDim && !is7 && !isMaj7 && !is9 && !isSus && !isAdd9) {
      for (const r of roots) {
        if (GUITAR_VOICINGS_DATABASE[r]) return GUITAR_VOICINGS_DATABASE[r];
      }
    }

    // Fallback: Compute authentic barre shapes according to fret position rather than defaulting to standard triads
    const rNorm = ENHARMONIC_MAP[(roots[0] || 'C').toUpperCase()] || (roots[0] || 'C');
    const rootPitchIdx = CHROMATIC_NOTES.indexOf(rNorm);
    const validIdx = rootPitchIdx !== -1 ? rootPitchIdx : 0;
    const eFret = (validIdx + 12 - 4) % 12 || 12; // E string fret for root
    const aFret = (validIdx + 12 - 9) % 12 || 12; // A string fret for root

    if (isMaj9) {
      return [
        { frets: ['X', aFret, aFret - 1 > 0 ? aFret - 1 : aFret + 11, aFret + 1, aFret, 'X'], baseFret: Math.max(1, aFret - 1), desc: 'Barre (Amaj9-shape)' },
        { frets: [eFret, 'X', eFret + 1, eFret - 1 > 0 ? eFret - 1 : eFret + 11, eFret, 'X'], baseFret: Math.max(1, eFret - 1), desc: 'Jazz Emaj9' }
      ];
    }
    if (isM9) {
      return [
        { frets: ['X', aFret, aFret - 1 > 0 ? aFret - 1 : aFret + 11, aFret, aFret + 1, 'X'], baseFret: Math.max(1, aFret - 1), desc: 'Barre (Am9-shape)' },
        { frets: [eFret, eFret + 2, eFret, eFret, eFret, eFret + 2], baseFret: eFret, desc: 'Barre (Em9-shape)' }
      ];
    }
    if (is9) {
      return [
        { frets: ['X', aFret, aFret - 1 > 0 ? aFret - 1 : aFret + 11, aFret, aFret, aFret], baseFret: Math.max(1, aFret - 1), desc: 'Barre (A9-shape)' },
        { frets: [eFret, eFret + 2, eFret, eFret + 1, eFret, eFret + 2], baseFret: eFret, desc: 'Barre (E9-shape)' }
      ];
    }
    if (isSus4) {
      return [
        { frets: ['X', aFret, aFret + 2, aFret + 2, aFret + 3, aFret], baseFret: aFret, desc: 'Barre (Asus4-shape)' },
        { frets: [eFret, eFret + 2, eFret + 2, eFret + 2, eFret, eFret], baseFret: eFret, desc: 'Barre (Esus4-shape)' }
      ];
    }
    if (isSus2) {
      return [
        { frets: ['X', aFret, aFret + 2, aFret + 2, aFret, aFret], baseFret: aFret, desc: 'Barre (Asus2-shape)' },
        { frets: [eFret, eFret + 2, eFret + 2, eFret - 1 > 0 ? eFret - 1 : 1, eFret, eFret], baseFret: eFret, desc: 'Barre (Esus2-shape)' }
      ];
    }
    if (isMaj7) {
      return [
        { frets: ['X', aFret, aFret + 2, aFret + 1, aFret + 2, aFret], baseFret: aFret, desc: 'Barre (Amaj7-shape)' },
        { frets: [eFret, eFret + 2, eFret + 1, eFret + 1, eFret, eFret], baseFret: eFret, desc: 'Barre (Emaj7-shape)' }
      ];
    }
    if (is7) {
      return [
        { frets: [eFret, eFret + 2, eFret, eFret + 1, eFret, eFret], baseFret: eFret, desc: 'Barre (E7-shape)' },
        { frets: ['X', aFret, aFret + 2, aFret, aFret + 2, aFret], baseFret: aFret, desc: 'Barre (A7-shape)' }
      ];
    }
    if (isMinor) {
      return [
        { frets: [eFret, eFret + 2, eFret + 2, eFret, eFret, eFret], baseFret: eFret, desc: 'Barre (Em-shape)' },
        { frets: ['X', aFret, aFret + 2, aFret + 2, aFret + 1, aFret], baseFret: aFret, desc: 'Barre (Am-shape)' }
      ];
    }

    return [
      { frets: [eFret, eFret + 2, eFret + 2, eFret + 1, eFret, eFret], baseFret: eFret, desc: 'Barre (E-shape)' },
      { frets: ['X', aFret, aFret + 2, aFret + 2, aFret + 2, aFret], baseFret: aFret, desc: 'Barre (A-shape)' }
    ];
  }

  function getGuitarVoicing(chordObj, voicingIdx = 0) {
    const list = getGuitarVoicingsList(chordObj);
    return list[Math.abs(voicingIdx) % list.length];
  }

  function getUkuleleVoicing(chordObj) {
    if (UKULELE_DATABASE[chordObj.raw]) return UKULELE_DATABASE[chordObj.raw];
    if (UKULELE_DATABASE[chordObj.root + chordObj.qualKey]) return UKULELE_DATABASE[chordObj.root + chordObj.qualKey];
    if (UKULELE_DATABASE[chordObj.normRoot + chordObj.qualKey]) return UKULELE_DATABASE[chordObj.normRoot + chordObj.qualKey];

    const qual = chordObj.qualKey.toLowerCase();
    const isMinor = qual.includes('m') || qual.includes('min') || qual.includes('-');
    const isDim = qual.includes('dim');
    const is7 = qual.includes('7');

    if (isMinor) {
      if (UKULELE_DATABASE[chordObj.root + 'm']) return UKULELE_DATABASE[chordObj.root + 'm'];
      if (UKULELE_DATABASE[chordObj.normRoot + 'm']) return UKULELE_DATABASE[chordObj.normRoot + 'm'];
      return { frets: [2, 0, 0, 0], baseFret: 1 };
    }
    if (isDim) {
      if (UKULELE_DATABASE[chordObj.root + 'dim']) return UKULELE_DATABASE[chordObj.root + 'dim'];
      return { frets: [0, 1, 3, 1], baseFret: 1 };
    }
    if (is7) {
      if (UKULELE_DATABASE[chordObj.root + '7']) return UKULELE_DATABASE[chordObj.root + '7'];
    }

    if (!isMinor && !isDim) {
      if (UKULELE_DATABASE[chordObj.root]) return UKULELE_DATABASE[chordObj.root];
      if (UKULELE_DATABASE[chordObj.normRoot]) return UKULELE_DATABASE[chordObj.normRoot];
    }
    return { frets: [0, 0, 0, 3], baseFret: 1 };
  }

  // Active UI filters
  const selectedInstruments = {
    piano: true,
    guitar: true,
    ukulele: false,
    bass: false
  };

  // Music Theory Definitions for Progression Builder
  const TONIC_ROOTS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  const SCALE_DEFS = {
    major: {
      name: 'Major (Ionian)',
      intervals: [0, 2, 4, 5, 7, 9, 11],
      degrees: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
      degrees_7ths: ['Imaj7', 'ii7', 'iii7', 'IVmaj7', 'V7', 'vi7', 'viiø7'],
      degrees_9ths: ['Imaj9', 'ii9', 'iii9', 'IVmaj9', 'V9', 'vi9', 'viiø9'],
      degrees_sus: ['Isus2', 'iisus4', 'iii(add9)', 'IVsus2', 'V7sus', 'visus4', 'viidim'],
      funcs: ['Tonic', 'Subdominant', 'Tonic', 'Subdominant', 'Dominant', 'Tonic', 'Leading'],
      triads: ['', 'm', 'm', '', '', 'm', 'dim'],
      sevenths: ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5'],
      ninths: ['maj9', 'm9', 'm9', 'maj9', '9', 'm9', 'm9b5'],
      sus: ['add9', 'sus2', 'sus4', 'add9', '7sus4', 'sus2', 'dim']
    },
    minor: {
      name: 'Natural Minor (Aeolian)',
      intervals: [0, 2, 3, 5, 7, 8, 10],
      degrees: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
      degrees_7ths: ['i7', 'iiø7', 'IIImaj7', 'iv7', 'v7', 'VImaj7', 'VII7'],
      degrees_9ths: ['i9', 'iiø9', 'IIImaj9', 'iv9', 'v9', 'VImaj9', 'VII9'],
      degrees_sus: ['i(add9)', 'iidim', 'III(add9)', 'ivsus4', 'v7sus', 'VI(add9)', 'VIIsus'],
      funcs: ['Tonic', 'Subdominant', 'Mediant', 'Subdominant', 'Dominant', 'Submediant', 'Subtonic'],
      triads: ['m', 'dim', '', 'm', 'm', '', ''],
      sevenths: ['m7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7', '7'],
      ninths: ['m9', 'm9b5', 'maj9', 'm9', 'm9', 'maj9', '9'],
      sus: ['add9', 'dim', 'add9', 'sus4', '7sus4', 'add9', 'sus2']
    },
    dorian: {
      name: 'Dorian Mode',
      intervals: [0, 2, 3, 5, 7, 9, 10],
      degrees: ['i', 'ii', 'III', 'IV', 'v', 'vi°', 'VII'],
      degrees_7ths: ['i7', 'ii7', 'IIImaj7', 'IV7', 'v7', 'viø7', 'VIImaj7'],
      degrees_9ths: ['i9', 'ii9', 'IIImaj9', 'IV9', 'v9', 'viø9', 'VIImaj9'],
      degrees_sus: ['i(add9)', 'iisus2', 'III(add9)', 'IV7sus', 'vsus2', 'vidim', 'VIIsus4'],
      funcs: ['Tonic', 'Supertonic', 'Mediant', 'Subdominant', 'Dominant', 'Submediant', 'Subtonic'],
      triads: ['m', 'm', '', '', 'm', 'dim', ''],
      sevenths: ['m7', 'm7', 'maj7', '7', 'm7', 'm7b5', 'maj7'],
      ninths: ['m9', 'm9', 'maj9', '9', 'm9', 'm9b5', 'maj9'],
      sus: ['add9', 'sus2', 'add9', '7sus4', 'sus2', 'dim', 'sus4']
    },
    mixolydian: {
      name: 'Mixolydian Mode',
      intervals: [0, 2, 4, 5, 7, 9, 10],
      degrees: ['I', 'ii', 'iii°', 'IV', 'v', 'vi', 'bVII'],
      degrees_7ths: ['I7', 'ii7', 'iiiø7', 'IVmaj7', 'v7', 'vi7', 'bVIImaj7'],
      degrees_9ths: ['I9', 'ii9', 'iiiø9', 'IVmaj9', 'v9', 'vi9', 'bVIImaj9'],
      degrees_sus: ['I7sus4', 'iisus2', 'iiidim', 'IVsus4', 'vsus2', 'vi(add9)', 'bVII(add9)'],
      funcs: ['Tonic', 'Supertonic', 'Leading', 'Subdominant', 'Dominant', 'Submediant', 'Subtonic'],
      triads: ['', 'm', 'dim', '', 'm', 'm', ''],
      sevenths: ['7', 'm7', 'm7b5', 'maj7', 'm7', 'm7', 'maj7'],
      ninths: ['9', 'm9', 'm9b5', 'maj9', 'm9', 'm9', 'maj9'],
      sus: ['7sus4', 'sus2', 'dim', 'sus4', 'sus2', 'add9', 'add9']
    },
    harmonic_minor: {
      name: 'Harmonic Minor',
      intervals: [0, 2, 3, 5, 7, 8, 11],
      degrees: ['i', 'ii°', 'III+', 'iv', 'V', 'VI', 'vii°'],
      degrees_7ths: ['i(maj7)', 'iiø7', 'III+maj7', 'iv7', 'V7', 'VImaj7', 'vii°7'],
      degrees_9ths: ['i9', 'iiø9', 'III+maj9', 'iv9', 'V9', 'VImaj9', 'vii°7'],
      degrees_sus: ['i(add9)', 'iidim', 'III+aug', 'ivsus4', 'V7sus4', 'VI(add9)', 'viidim'],
      funcs: ['Tonic', 'Subdominant', 'Mediant', 'Subdominant', 'Dominant', 'Submediant', 'Leading'],
      triads: ['m', 'dim', 'aug', 'm', '', '', 'dim'],
      sevenths: ['mMaj7', 'm7b5', 'maj7', 'm7', '7', 'maj7', 'dim7'],
      ninths: ['m9', 'm9b5', 'maj9', 'm9', '9', 'maj9', 'dim7'],
      sus: ['add9', 'dim', 'aug', 'sus4', '7sus4', 'add9', 'dim']
    }
  };

  const SONGWRITING_PRESETS = [
    { name: '⚡ Select a Songwriting Preset...', degrees: [] },
    { name: 'Pop Anthem (I - V - vi - IV)', degrees: [0, 4, 5, 3], scaleOverride: 'major', complexity: 'triads', durations: [4, 4, 4, 4] },
    { name: '50s Doo-Wop (I - vi - IV - V)', degrees: [0, 5, 3, 4], scaleOverride: 'major', complexity: 'triads', durations: [4, 4, 4, 4] },
    { name: 'Jazz 2-5-1 (ii7 - V7 - Imaj7)', degrees: [1, 4, 0], scaleOverride: 'major', complexity: '7ths', durations: [4, 4, 8] },
    { name: 'Neo-Soul R&B (ii9 - V13 - Imaj9 - vi7)', degrees: [1, 4, 0, 5], scaleOverride: 'major', complexity: '9ths', durations: [4, 4, 4, 4] },
    { name: 'Royal Road / J-Pop (IVmaj7 - V7 - iii7 - vi)', degrees: [3, 4, 2, 5], scaleOverride: 'major', complexity: '7ths', durations: [4, 4, 4, 4] },
    { name: 'Emotional Pop (vi - IV - I - V)', degrees: [5, 3, 0, 4], scaleOverride: 'major', complexity: 'triads', durations: [4, 4, 4, 4] },
    { name: 'Classic Rock / Folk (I - bVII - IV - I)', degrees: [0, 6, 3, 0], scaleOverride: 'mixolydian', complexity: 'triads', durations: [4, 4, 4, 4] },
    { name: 'Hero / Epic Lift (I - bVI - bVII - I)', customChords: ['I', 'bVI', 'bVII', 'I'], scaleOverride: 'major', complexity: 'triads', durations: [4, 4, 4, 4] },
    { name: 'Andalusian Cadence (i - VII - VI - V)', degrees: [0, 6, 5, 4], scaleOverride: 'minor', complexity: 'triads', durations: [4, 4, 4, 4] },
    { name: 'R&B Slow Jam (i - iv - v - i)', degrees: [0, 3, 4, 0], scaleOverride: 'minor', complexity: '7ths', durations: [4, 4, 4, 4] },
    { name: 'Epic Trailer (i - VI - III - VII)', degrees: [0, 5, 2, 6], scaleOverride: 'minor', complexity: 'triads', durations: [4, 4, 4, 4] }
  ];

  // Major Scale Notes for accurate degree spelling and modal interchange (bVI, bVII, etc.)
  const MAJOR_SCALE_NOTES = {
    'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
    'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F']
  };

  function flattenNote(noteName) {
    if (!noteName) return 'C';
    if (noteName.endsWith('#')) {
      return noteName.slice(0, -1);
    }
    if (noteName.endsWith('b')) {
      if (noteName === 'Bb') return 'A';
      return noteName + 'b';
    }
    return noteName + 'b';
  }

  function getFlatDegreeRoot(tonic, degNumber) {
    let t = (tonic || 'C').trim();
    if (t.length > 1) {
      if (t[1] === 'b' || t[1] === 'B') t = t[0].toUpperCase() + 'b';
      else if (t[1] === '#') t = t[0].toUpperCase() + '#';
      else t = t[0].toUpperCase();
    } else {
      t = t.toUpperCase();
    }
    const scale = MAJOR_SCALE_NOTES[t] || MAJOR_SCALE_NOTES['C'];
    const diatonicNote = scale[degNumber - 1] || 'C';
    return flattenNote(diatonicNote);
  }

  function getDegreeIdxFromSymbol(degStr) {
    if (!degStr || typeof degStr !== 'string') return 0;
    const clean = degStr.trim();
    if (/^b?VII/i.test(clean) || clean.startsWith('7')) return 6; // Degree 7 -> Pink
    if (/^b?VI/i.test(clean) || clean.startsWith('6')) return 5;  // Degree 6 -> Violet
    if (/^V(\/|$|[0-9]|maj)/i.test(clean) && !clean.startsWith('VII') && !clean.startsWith('VI')) return 4; // Degree 5 -> Blue
    if (/^IV/i.test(clean)) return 3; // Degree 4 -> Green
    if (/^b?III/i.test(clean)) return 2; // Degree 3 -> Yellow
    if (/^b?II/i.test(clean)) return 1; // Degree 2 -> Orange
    if (/^I/i.test(clean)) return 0; // Degree 1 -> Red
    return 0;
  }

  function getDegreeColor(degIdx, degStr = '') {
    let idx = (typeof degIdx === 'number' && degIdx >= 0 && degIdx <= 6) ? degIdx : getDegreeIdxFromSymbol(degStr);
    if (idx < 0 || idx > 6) idx = 0;
    return `clip-deg-${idx + 1}`;
  }

  function resolveChordOrDegree(token, tonic, scaleKey, complexity = 'triads') {
    const diatonicList = getDiatonicChords(tonic, scaleKey, complexity);
    const clean = (token || '').trim();

    if (clean.toUpperCase() === 'BVI') {
      return { chordSymbol: getFlatDegreeRoot(tonic, 6), degree: 'bVI', degreeIdx: 5 };
    }
    if (clean.toUpperCase() === 'BVII') {
      return { chordSymbol: getFlatDegreeRoot(tonic, 7), degree: 'bVII', degreeIdx: 6 };
    }
    if (clean.toUpperCase() === 'BIII') {
      return { chordSymbol: getFlatDegreeRoot(tonic, 3), degree: 'bIII', degreeIdx: 2 };
    }

    for (let d = 0; d < diatonicList.length; d++) {
      if (diatonicList[d].degree.toLowerCase() === clean.toLowerCase()) {
        return { chordSymbol: diatonicList[d].chordSymbol, degree: diatonicList[d].degree, degreeIdx: d };
      }
    }

    for (let d = 0; d < diatonicList.length; d++) {
      if (diatonicList[d].chordSymbol.toLowerCase() === clean.toLowerCase()) {
        return { chordSymbol: diatonicList[d].chordSymbol, degree: diatonicList[d].degree, degreeIdx: d };
      }
    }

    const bVI_root = getFlatDegreeRoot(tonic, 6);
    const bVII_root = getFlatDegreeRoot(tonic, 7);
    if (clean.toLowerCase() === bVI_root.toLowerCase()) {
      return { chordSymbol: bVI_root, degree: 'bVI', degreeIdx: 5 };
    }
    if (clean.toLowerCase() === bVII_root.toLowerCase()) {
      return { chordSymbol: bVII_root, degree: 'bVII', degreeIdx: 6 };
    }

    const degIdx = getDegreeIdxFromSymbol(clean);
    return { chordSymbol: clean, degree: clean, degreeIdx: degIdx };
  }

  function getRootNameAtInterval(tonic, semitones) {
    const flatRoots = ['F', 'BB', 'EB', 'AB', 'DB', 'GB'];
    const normTonic = ENHARMONIC_MAP[tonic.toUpperCase()] || tonic;
    const tonicIdx = CHROMATIC_NOTES.indexOf(normTonic);
    if (tonicIdx === -1) return 'C';
    const noteIdx = (tonicIdx + semitones) % 12;
    const useFlat = tonic.includes('b') || flatRoots.includes(normTonic.toUpperCase()) || tonic.toUpperCase() === 'F';
    return useFlat ? CHROMATIC_NOTES_FLAT[noteIdx] : CHROMATIC_NOTES[noteIdx];
  }

  function getDiatonicChords(tonic, scaleKey, complexity = 'triads') {
    const scale = SCALE_DEFS[scaleKey] || SCALE_DEFS.major;
    const qualKey = complexity === '7ths' ? 'sevenths' : (complexity === '9ths' ? 'ninths' : (complexity === 'sus' ? 'sus' : 'triads'));
    const qualities = scale[qualKey] || scale.triads;
    const degreeListKey = complexity === '7ths' ? 'degrees_7ths' : (complexity === '9ths' ? 'degrees_9ths' : (complexity === 'sus' ? 'degrees_sus' : 'degrees'));
    const degreeList = scale[degreeListKey] || scale.degrees;

    return scale.intervals.map((interval, i) => {
      const root = getRootNameAtInterval(tonic, interval);
      const qual = qualities[i];
      const chordSymbol = root + qual;
      return {
        degree: degreeList[i],
        degreeIdx: i,
        root: root,
        qual: qual,
        chordSymbol: chordSymbol,
        func: scale.funcs[i],
        shortcut: String(i + 1)
      };
    });
  }

  function getSpiceChords(tonic, scaleKey) {
    const bVI_root = getFlatDegreeRoot(tonic, 6);
    const bVII_root = getFlatDegreeRoot(tonic, 7);
    const bIII_root = getFlatDegreeRoot(tonic, 3);
    const bII_root = getFlatDegreeRoot(tonic, 2);

    if (scaleKey === 'minor' || scaleKey === 'harmonic_minor') {
      return [
        { degree: 'V', degreeIdx: 4, chordSymbol: getRootNameAtInterval(tonic, 7) + '7', desc: 'Major Dominant' },
        { degree: 'IV', degreeIdx: 3, chordSymbol: getRootNameAtInterval(tonic, 5), desc: 'Major IV (Dorian)' },
        { degree: 'bII', degreeIdx: 1, chordSymbol: bII_root, desc: 'Neapolitan Chord' },
        { degree: 'VI', degreeIdx: 5, chordSymbol: getRootNameAtInterval(tonic, 8) + 'maj7', desc: 'Major VI Lift' },
        { degree: 'bVII', degreeIdx: 6, chordSymbol: bVII_root, desc: 'Subtonic 7th' },
        { degree: 'V/iv', degreeIdx: 0, chordSymbol: getRootNameAtInterval(tonic, 0) + '7', desc: 'Sec. Dominant to iv' }
      ];
    }
    // Major & other modes
    return [
      { degree: 'bVI', degreeIdx: 5, chordSymbol: bVI_root, desc: 'Flat 6th (Epic Lift)' },
      { degree: 'bVII', degreeIdx: 6, chordSymbol: bVII_root, desc: 'Backdoor Flat 7th' },
      { degree: 'iv', degreeIdx: 3, chordSymbol: getRootNameAtInterval(tonic, 5) + 'm', desc: 'Minor 4th (Bittersweet)' },
      { degree: 'bIII', degreeIdx: 2, chordSymbol: bIII_root, desc: 'Flat 3rd (Blues/Rock)' },
      { degree: 'V/V', degreeIdx: 1, chordSymbol: getRootNameAtInterval(tonic, 2) + '7', desc: 'Sec. Dominant to V' },
      { degree: 'V/vi', degreeIdx: 5, chordSymbol: getRootNameAtInterval(tonic, 4) + '7', desc: 'Sec. Dominant to vi' },
      { degree: 'V/ii', degreeIdx: 1, chordSymbol: getRootNameAtInterval(tonic, 9) + '7', desc: 'Sec. Dominant to ii' },
      { degree: 'V/IV', degreeIdx: 3, chordSymbol: getRootNameAtInterval(tonic, 0) + '7', desc: 'Sec. Dominant to IV' }
    ];
  }

  // Pure JavaScript Standard MIDI File (Format 1) Generator & Downloader
  function downloadMidiProgression(timelineChords, bpm, tonic, scaleName) {
    if (!timelineChords || timelineChords.length === 0) {
      alert("Please add at least one chord to the timeline before exporting MIDI.");
      return;
    }
    const PPQ = 480;
    const tempoMicros = Math.round(60000000 / Math.max(20, Math.min(300, bpm)));

    function numToBytes(num, byteCount) {
      const bytes = [];
      for (let i = byteCount - 1; i >= 0; i--) {
        bytes.push((num >> (i * 8)) & 0xFF);
      }
      return bytes;
    }

    function writeVarLen(val) {
      let buffer = val & 0x7F;
      while ((val >>= 7)) {
        buffer <<= 8;
        buffer |= ((val & 0x7F) | 0x80);
      }
      const bytes = [];
      while (true) {
        bytes.push(buffer & 0xFF);
        if (buffer & 0x80) buffer >>= 8;
        else break;
      }
      return bytes;
    }

    // Track 0: Tempo and Meta
    const t0 = [];
    t0.push(...writeVarLen(0), 0xFF, 0x03, 0x08, ...Array.from("FloatDoc").map(c => c.charCodeAt(0)));
    t0.push(...writeVarLen(0), 0xFF, 0x51, 0x03, (tempoMicros >> 16) & 0xFF, (tempoMicros >> 8) & 0xFF, tempoMicros & 0xFF);
    t0.push(...writeVarLen(0), 0xFF, 0x58, 0x04, 0x04, 0x02, 0x18, 0x08);
    t0.push(...writeVarLen(0), 0xFF, 0x2F, 0x00);

    // Track 1: Chords / Harmony (Channel 0)
    const t1 = [];
    t1.push(...writeVarLen(0), 0xFF, 0x03, 0x06, ...Array.from("Chords").map(c => c.charCodeAt(0)));
    timelineChords.forEach(item => {
      const parsed = parseChord(item.chordSymbol, currentTonic);
      const durationBeats = item.duration || 4;
      const ticks = Math.round(durationBeats * PPQ);
      let notes = parsed && parsed.midiNotes && parsed.midiNotes.length ? [...parsed.midiNotes] : [60, 64, 67];
      if (item.inversion === 1 && notes.length > 1) {
        notes[0] += 12;
      } else if (item.inversion === 2 && notes.length > 2) {
        notes[0] += 12;
        notes[1] += 12;
      }
      notes.sort((a, b) => a - b);

      notes.forEach((pitch) => {
        t1.push(...writeVarLen(0));
        t1.push(0x90, Math.max(0, Math.min(127, pitch)), 85);
      });

      notes.forEach((pitch, idx) => {
        t1.push(...writeVarLen(idx === 0 ? ticks : 0));
        t1.push(0x80, Math.max(0, Math.min(127, pitch)), 0);
      });
    });
    t1.push(...writeVarLen(0), 0xFF, 0x2F, 0x00);

    // Track 2: Bass (Channel 1)
    const t2 = [];
    t2.push(...writeVarLen(0), 0xFF, 0x03, 0x04, ...Array.from("Bass").map(c => c.charCodeAt(0)));
    timelineChords.forEach(item => {
      const parsed = parseChord(item.chordSymbol, currentTonic);
      const durationBeats = item.duration || 4;
      const ticks = Math.round(durationBeats * PPQ);
      const rootName = (parsed && (parsed.slashBass || parsed.normRoot)) || 'C';
      const rootIdx = CHROMATIC_NOTES.indexOf(rootName.toUpperCase());
      const bassMidi = 36 + (rootIdx >= 0 ? rootIdx : 0);

      t2.push(...writeVarLen(0));
      t2.push(0x91, Math.max(0, Math.min(127, bassMidi)), 95);

      t2.push(...writeVarLen(ticks));
      t2.push(0x81, Math.max(0, Math.min(127, bassMidi)), 0);
    });
    t2.push(...writeVarLen(0), 0xFF, 0x2F, 0x00);

    const fullBytes = [
      0x4D, 0x54, 0x68, 0x64,
      0x00, 0x00, 0x00, 0x06,
      0x00, 0x01,
      0x00, 0x03,
      ...numToBytes(PPQ, 2),

      0x4D, 0x54, 0x72, 0x6B,
      ...numToBytes(t0.length, 4),
      ...t0,

      0x4D, 0x54, 0x72, 0x6B,
      ...numToBytes(t1.length, 4),
      ...t1,

      0x4D, 0x54, 0x72, 0x6B,
      ...numToBytes(t2.length, 4),
      ...t2
    ];

    const blob = new Blob([new Uint8Array(fullBytes)], { type: 'audio/midi' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const cleanTonic = tonic.replace('#', 'sharp');
    a.download = `progression_${cleanTonic}_${scaleName}_${bpm}bpm.mid`.toLowerCase();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  // Master render of the modal
  window.openChordsAndNotesModal = function(pipWindow, modal, modalTitle, modalBody, registerStop) {
    isModalActive = true;
    modal.classList.add('wide-overlay');
    const modalContent = pipWindow.document.querySelector('.modal-content');
    if (modalContent) modalContent.classList.add('wide-modal');

    // Context root for DOM queries in PiP or main window
    const doc = (modal && modal.ownerDocument) ? modal.ownerDocument : (pipWindow && pipWindow.document ? pipWindow.document : document);

    // Inject guaranteed Timeline, Ruler & Chord Clip CSS into the active document
    if (!doc.getElementById('chords-modal-injected-styles')) {
      const injectedStyle = doc.createElement('style');
      injectedStyle.id = 'chords-modal-injected-styles';
      injectedStyle.textContent = `
        .daw-timeline-wrapper {
          position: relative !important;
          border: 1.5px solid #285E4A !important;
          border-radius: 6px !important;
          overflow: hidden !important;
          background: #081912 !important;
          margin-bottom: 6px !important;
          box-sizing: border-box !important;
          width: 100% !important;
        }
        .daw-ruler {
          display: flex !important;
          flex-direction: column !important;
          background: #0f2e23 !important;
          user-select: none !important;
          border-bottom: 1.5px solid #285E4A !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .daw-ruler-measures-row {
          display: flex !important;
          flex-direction: row !important;
          width: 100% !important;
          height: 22px !important;
          border-bottom: 1px solid rgba(0,0,0,0.4) !important;
          box-sizing: border-box !important;
        }
        .daw-ruler-measure-header {
          flex: 1 1 0% !important;
          min-width: 0 !important;
          background: #EAB308 !important;
          color: #133629 !important;
          font-weight: 800 !important;
          font-size: 11px !important;
          line-height: 22px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-family: 'Cabin', sans-serif !important;
          border-right: 2px solid #854d0e !important;
          text-transform: uppercase !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }
        .daw-ruler-measure-header:last-child {
          border-right: none !important;
        }
        .daw-ruler-beats-row {
          display: flex !important;
          flex-direction: row !important;
          width: 100% !important;
          height: 18px !important;
          background: #091f17 !important;
          box-sizing: border-box !important;
        }
        .daw-ruler-beat {
          flex: 1 1 0% !important;
          min-width: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 10px !important;
          line-height: 18px !important;
          color: #FEF08A !important;
          font-weight: 700 !important;
          border-right: 1px dashed rgba(255,255,255,0.18) !important;
          height: 100% !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
          background: #0f2e23 !important;
        }
        .daw-ruler-beat:last-child {
          border-right: none !important;
        }
        .daw-ruler-beat.measure-end {
          border-right: 2px solid #CA8A04 !important;
        }
        .daw-track {
          display: flex !important;
          height: 70px !important;
          width: 100% !important;
          position: relative !important;
          padding: 0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          align-items: stretch !important;
          background-color: #06150f !important;
          user-select: none !important;
        }
        .daw-chord-clip {
          position: relative !important;
          height: 100% !important;
          border-radius: 4px !important;
          box-sizing: border-box !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          padding: 2px 4px !important;
          margin: 0 !important;
          border: 1.5px solid rgba(0,0,0,0.5) !important;
          border-right: 1.5px solid rgba(0,0,0,0.8) !important;
          cursor: grab !important;
          box-shadow: 0 1px 4px rgba(0,0,0,0.4) !important;
          min-width: 20px !important;
          overflow: hidden !important;
        }
        .daw-chord-clip:active { cursor: grabbing !important; }
        .daw-chord-clip.active-playhead {
          border-color: #FACC15 !important;
          box-shadow: 0 0 14px rgba(250, 204, 21, 0.85) !important;
          filter: brightness(1.15) !important;
        }
        .daw-clip-del-btn {
          position: absolute !important;
          top: 2px !important;
          left: 2px !important;
          background: rgba(0,0,0,0.8) !important;
          border: 1px solid rgba(255,255,255,0.45) !important;
          color: #ffffff !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          cursor: pointer !important;
          width: 16px !important;
          height: 16px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          line-height: 1 !important;
          border-radius: 3px !important;
          z-index: 60 !important;
          transition: all 0.1s !important;
          pointer-events: auto !important;
        }
        .daw-clip-del-btn:hover {
          background: #dc2626 !important;
          color: #ffffff !important;
          border-color: #ef4444 !important;
        }
        .daw-clip-header {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          width: 100% !important;
          z-index: 20 !important;
          position: relative !important;
          height: 16px !important;
          padding-left: 18px !important;
          padding-right: 2px !important;
          box-sizing: border-box !important;
        }
        .daw-degree-label {
          font-size: 9.5px !important;
          font-weight: 700 !important;
          color: rgba(255,255,255,0.95) !important;
          font-family: 'Cabin', sans-serif !important;
          line-height: 1 !important;
        }
        .daw-inv-badge {
          background: rgba(0,0,0,0.45) !important;
          border: 1px solid rgba(255,255,255,0.3) !important;
          color: #FEF08A !important;
          font-size: 8px !important;
          font-weight: 700 !important;
          padding: 0 3px !important;
          border-radius: 3px !important;
          cursor: pointer !important;
          line-height: 1.2 !important;
          z-index: 25 !important;
        }
        .daw-inv-badge:hover {
          background: #EAB308 !important;
          color: #133629 !important;
        }
        .daw-clip-body {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 1 !important;
          width: 100% !important;
          padding-right: 10px !important;
          box-sizing: border-box !important;
        }
        .daw-chord-name {
          font-size: 14px !important;
          font-weight: 800 !important;
          color: #ffffff !important;
          font-family: 'Cabin', sans-serif !important;
          line-height: 1.1 !important;
          letter-spacing: 0.3px !important;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6) !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
        }
        .daw-resize-handle {
          position: absolute !important;
          right: 0 !important;
          bottom: 0 !important;
          top: 22px !important;
          width: 10px !important;
          cursor: col-resize !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: rgba(255,255,255,0.7) !important;
          font-size: 8px !important;
          font-weight: 900 !important;
          background: rgba(0,0,0,0.3) !important;
          border-bottom-right-radius: 4px !important;
          user-select: none !important;
          transition: background 0.1s !important;
          z-index: 20 !important;
        }
        .daw-resize-handle:hover {
          background: rgba(250, 204, 21, 0.6) !important;
          color: #133629 !important;
        }

        /* Dotted Box Popping Over Chord About to Be Swapped Out */
        .daw-chord-clip.clip-swap-hover {
          outline: 3px dashed #FACC15 !important;
          outline-offset: -3px !important;
          box-shadow: inset 0 0 16px rgba(250, 204, 21, 0.5), 0 0 14px rgba(250, 204, 21, 0.85) !important;
          transform: scale(1.03) !important;
          z-index: 50 !important;
          animation: swap-box-pulse 0.6s infinite alternate ease-in-out !important;
        }
        @keyframes swap-box-pulse {
          from { outline-color: #FACC15; }
          to { outline-color: #ffffff; }
        }
        .daw-chord-clip.clip-swap-hover::before {
          content: '🔄 SWAP' !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          background: rgba(15, 46, 35, 0.95) !important;
          border: 1.5px dashed #FACC15 !important;
          color: #FACC15 !important;
          font-size: 11px !important;
          font-weight: 900 !important;
          padding: 3px 7px !important;
          border-radius: 4px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.85) !important;
          pointer-events: none !important;
          z-index: 60 !important;
          white-space: nowrap !important;
          letter-spacing: 0.5px !important;
          font-family: 'Cabin', sans-serif !important;
        }

        /* Scale Degree Palette (Matching Window Buttons: R O Y G B V + Pink) */
        /* Degree 1 - Red (Shortcuts) */
        .clip-deg-1 { background: #b91c1c !important; border-color: #f87171 !important; color: #fef2f2 !important; }
        .deg-card-1 { background: #381010 !important; border-color: #ef4444 !important; }
        .deg-card-1 .diatonic-degree, .deg-card-1 .spice-degree { color: #fca5a5 !important; }
        .deg-card-1:hover { background: #501515 !important; border-color: #f87171 !important; }

        /* Degree 2 - Orange (Mix Tips) */
        .clip-deg-2 { background: #ea580c !important; border-color: #fb923c !important; color: #ffffff !important; }
        .deg-card-2 { background: #351a08 !important; border-color: #ea580c !important; }
        .deg-card-2 .diatonic-degree, .deg-card-2 .spice-degree { color: #fdba74 !important; }
        .deg-card-2:hover { background: #4d240c !important; border-color: #fb923c !important; }

        /* Degree 3 - Yellow (Chords) */
        .clip-deg-3 { background: #eab308 !important; border-color: #fef08a !important; color: #133629 !important; }
        .clip-deg-3 .daw-chord-name { color: #133629 !important; font-weight: 900 !important; text-shadow: none !important; }
        .clip-deg-3 .daw-degree-label { color: #133629 !important; font-weight: 800 !important; }
        .clip-deg-3 .daw-inv-badge { background: #133629 !important; color: #fef08a !important; border-color: #ca8a04 !important; }
        .deg-card-3 { background: #352b08 !important; border-color: #eab308 !important; }
        .deg-card-3 .diatonic-degree, .deg-card-3 .spice-degree { color: #fde047 !important; }
        .deg-card-3:hover { background: #4d3e0c !important; border-color: #facc15 !important; }

        /* Degree 4 - Green (Patterns) */
        .clip-deg-4 { background: #059669 !important; border-color: #34d399 !important; color: #ecfdf5 !important; }
        .deg-card-4 { background: #08281d !important; border-color: #10b981 !important; }
        .deg-card-4 .diatonic-degree, .deg-card-4 .spice-degree { color: #6ee7b7 !important; }
        .deg-card-4:hover { background: #0e3b2b !important; border-color: #34d399 !important; }

        /* Degree 5 - Blue (BPM) */
        .clip-deg-5 { background: #2563eb !important; border-color: #60a5fa !important; color: #ffffff !important; }
        .deg-card-5 { background: #0b1f3d !important; border-color: #2563eb !important; }
        .deg-card-5 .diatonic-degree, .deg-card-5 .spice-degree { color: #93c5fd !important; }
        .deg-card-5:hover { background: #122f5a !important; border-color: #60a5fa !important; }

        /* Degree 6 - Violet (Glossary) */
        .clip-deg-6 { background: #7c3aed !important; border-color: #a78bfa !important; color: #ffffff !important; }
        .deg-card-6 { background: #23123d !important; border-color: #7c3aed !important; }
        .deg-card-6 .diatonic-degree, .deg-card-6 .spice-degree { color: #c4b5fd !important; }
        .deg-card-6:hover { background: #341a5b !important; border-color: #a78bfa !important; }

        /* Degree 7 - Pink (Ask AI) */
        .clip-deg-7 { background: #db2777 !important; border-color: #f472b6 !important; color: #ffffff !important; }
        .deg-card-7 { background: #350f29 !important; border-color: #db2777 !important; }
        .deg-card-7 .diatonic-degree, .deg-card-7 .spice-degree { color: #f472b6 !important; }
        .deg-card-7:hover { background: #4e173d !important; border-color: #f472b6 !important; }

        .daw-chord-clip.clip-drag-over-left {
          border-left: 4px solid #FACC15 !important;
          box-shadow: -6px 0 16px rgba(250, 204, 21, 0.95) !important;
          position: relative !important;
        }
        .daw-chord-clip.clip-drag-over-left::after {
          content: '' !important;
          position: absolute !important;
          left: -2px !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 5px !important;
          background: #FACC15 !important;
          box-shadow: 0 0 12px #FACC15, 0 0 24px #EAB308 !important;
          z-index: 100 !important;
          pointer-events: none !important;
          border-radius: 2px !important;
        }
        .daw-chord-clip.clip-drag-over-right {
          border-right: 4px solid #FACC15 !important;
          box-shadow: 6px 0 16px rgba(250, 204, 21, 0.95) !important;
          position: relative !important;
        }
        .daw-chord-clip.clip-drag-over-right::after {
          content: '' !important;
          position: absolute !important;
          right: -2px !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 5px !important;
          background: #FACC15 !important;
          box-shadow: 0 0 12px #FACC15, 0 0 24px #EAB308 !important;
          z-index: 100 !important;
          pointer-events: none !important;
          border-radius: 2px !important;
        }

        /* Glowing Insertion Indicator Line Popping Up Between Chords */
        .daw-insertion-line {
          position: absolute !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 4px !important;
          background: #FACC15 !important;
          box-shadow: 0 0 10px #FACC15, 0 0 22px rgba(250, 204, 21, 0.95) !important;
          z-index: 1000 !important;
          pointer-events: none !important;
          display: none;
          transform: translateX(-50%) !important;
          border-radius: 2px !important;
        }
        .daw-insertion-line::before {
          content: '▼' !important;
          position: absolute !important;
          top: -2px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          color: #FACC15 !important;
          font-size: 13px !important;
          line-height: 1 !important;
          text-shadow: 0 0 6px #000, 0 0 10px #FACC15 !important;
        }
        .daw-insertion-line::after {
          content: '▲' !important;
          position: absolute !important;
          bottom: -2px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          color: #FACC15 !important;
          font-size: 13px !important;
          line-height: 1 !important;
          text-shadow: 0 0 6px #000, 0 0 10px #FACC15 !important;
        }

        .phrase-toggle-group {
          display: inline-flex !important;
          border: 1.5px solid #CA8A04 !important;
          border-radius: 4px !important;
          overflow: hidden !important;
        }
        .phrase-toggle-btn {
          background: #14382B !important;
          border: none !important;
          color: #FEF08A !important;
          font-size: 10.5px !important;
          font-weight: 700 !important;
          padding: 3px 10px !important;
          cursor: pointer !important;
          font-family: 'Cabin', sans-serif !important;
          transition: all 0.12s !important;
        }
        .phrase-toggle-btn:not(:last-child) {
          border-right: 1px solid #285E4A !important;
        }
        .phrase-toggle-btn:hover {
          background: #235C48 !important;
          color: #FACC15 !important;
        }
        .phrase-toggle-btn.active {
          background: #EAB308 !important;
          color: #133629 !important;
          font-weight: 800 !important;
        }
        .modal-close {
          cursor: pointer !important;
          pointer-events: auto !important;
          z-index: 1000 !important;
        }
      `;
      doc.head.appendChild(injectedStyle);
    }

    // Ensure sample manifest is fetched and indexed immediately on open
    audio.sampleManager.ensureManifest();

    // Progression Builder & Timeline State
    let currentTonic = 'C';
    let currentScale = 'major';
    let currentComplexity = '7ths';
    let currentBpm = 96;
    let isLooping = true;
    let isMetronomeOn = false;
    let playbackStyle = 'block'; // 'block', 'strum', 'arp'
    let currentSoundType = 'rhodes';
    let currentPhraseBars = 4; // 4-bar phrase by default, can double to 8 bars

    // Timeline chords array (default 4-bar phrase matching Pop/Jazz turnaround, with Scale Degree colors)
    let timelineChords = [
      { id: 1, chordSymbol: 'Cmaj7', degree: 'Imaj7', degreeIdx: 0, duration: 4, inversion: 0, color: 'clip-deg-1' },
      { id: 2, chordSymbol: 'Am7', degree: 'vi7', degreeIdx: 5, duration: 4, inversion: 0, color: 'clip-deg-6' },
      { id: 3, chordSymbol: 'Dm7', degree: 'ii7', degreeIdx: 1, duration: 4, inversion: 0, color: 'clip-deg-2' },
      { id: 4, chordSymbol: 'G7', degree: 'V7', degreeIdx: 4, duration: 4, inversion: 0, color: 'clip-deg-5' }
    ];

    // Bass fretboard position cycling tracking
    const bassPositionIndices = {};
    const guitarVoicingIndices = {};

    // Playback scheduling timers
    let progressionTimers = [];
    let isPlayingProgression = false;
    let activeTimelineStepIdx = -1;

    // Master Piano Keys Highlighter Helper
    function highlightKeys(tones) {
      const pitchClasses = new Set();
      if (Array.isArray(tones)) {
        tones.forEach(t => {
          if (!t) return;
          const clean = t.toUpperCase().replace(/[0-9]/g, '');
          const norm = ENHARMONIC_MAP[clean] || clean;
          const idx = CHROMATIC_NOTES.indexOf(norm);
          if (idx !== -1) pitchClasses.add(idx);
          const flatIdx = CHROMATIC_NOTES_FLAT.indexOf(clean);
          if (flatIdx !== -1) pitchClasses.add(flatIdx);
        });
      }

      modalBody.querySelectorAll('.piano-white-key').forEach(el => {
        const midi = parseInt(el.getAttribute('data-midi'), 10);
        const letter = el.getAttribute('data-letter');
        const pc = CHROMATIC_NOTES.indexOf(letter);
        if (pitchClasses.has(midi % 12) || pitchClasses.has(pc)) {
          el.classList.add('chord-highlight');
        } else {
          el.classList.remove('chord-highlight');
        }
      });

      modalBody.querySelectorAll('.piano-black-key').forEach(el => {
        const midi = parseInt(el.getAttribute('data-midi'), 10);
        const sharp = el.getAttribute('data-sharp');
        const flat = el.getAttribute('data-flat');
        const sharpIdx = CHROMATIC_NOTES.indexOf(sharp);
        const flatIdx = CHROMATIC_NOTES_FLAT.indexOf(flat);
        if (pitchClasses.has(midi % 12) || pitchClasses.has(sharpIdx) || pitchClasses.has(flatIdx)) {
          el.classList.add('chord-highlight');
        } else {
          el.classList.remove('chord-highlight');
        }
      });
    }

    function stopProgression() {
      isPlayingProgression = false;
      activeTimelineStepIdx = -1;
      progressionTimers.forEach(id => clearTimeout(id));
      progressionTimers = [];
      try { audio.stopAllVoices(); } catch(e) {}
      highlightKeys([]);

      const btn = modalBody.querySelector('#playProgressionBtn');
      if (btn) {
        btn.textContent = '▶ Play Progression';
        btn.classList.remove('active');
      }

      // Hide playhead line and clear playhead glows
      const playheadLine = modalBody.querySelector('#dawPlayheadLine');
      if (playheadLine) playheadLine.style.display = 'none';

      modalBody.querySelectorAll('.daw-chord-clip').forEach(b => b.classList.remove('active-playhead'));
      modalBody.querySelectorAll('.chord-col').forEach(c => c.classList.remove('active-playhead'));
    }

    const closeModal = () => {
      isModalActive = false;
      stopProgression();
      try { audio.stopAll(); } catch(e) {}
      highlightKeys([]);
      modal.style.display = 'none';
      modal.classList.remove('wide-overlay');
      if (modalContent) modalContent.classList.remove('wide-modal');

      doc.removeEventListener('keydown', onModalEscapeKey);
      window.removeEventListener('keydown', onModalEscapeKey);
      if (pipWindow && pipWindow !== window) {
        pipWindow.removeEventListener('keydown', onModalEscapeKey);
      }
    };

    registerStop(() => {
      closeModal();
    });

    const closeBtn = doc.getElementById('closeModalBtn') || modal.querySelector('#closeModalBtn') || modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
      };
    }

    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };

    const onModalEscapeKey = (e) => {
      if (e.key === 'Escape' && isModalActive) {
        closeModal();
      }
    };
    doc.addEventListener('keydown', onModalEscapeKey);
    window.addEventListener('keydown', onModalEscapeKey);
    if (pipWindow && pipWindow !== window) {
      pipWindow.addEventListener('keydown', onModalEscapeKey);
    }

    modalTitle.textContent = "🎹 CHORD PROGRESSION CREATOR, KEYBOARD & CHARTS";

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

        <!-- Chord Progression Creator Panel -->
        <div class="chord-creator-panel">
          <!-- Top Bar: Key, Scale, Complexity, Presets, Spice Toggle -->
          <div class="builder-top-bar">
            <div class="builder-controls-left">
              <div class="builder-select-group">
                <span class="builder-label">Key:</span>
                <select id="builderKeySelect" class="builder-select">
                  ${TONIC_ROOTS.map(r => `<option value="${r}">${r}</option>`).join('')}
                </select>
              </div>

              <div class="builder-select-group">
                <span class="builder-label">Scale:</span>
                <select id="builderScaleSelect" class="builder-select">
                  <option value="major" selected>Major (Ionian)</option>
                  <option value="minor">Natural Minor</option>
                  <option value="dorian">Dorian Mode</option>
                  <option value="mixolydian">Mixolydian</option>
                  <option value="harmonic_minor">Harmonic Minor</option>
                </select>
              </div>

              <div class="complexity-btn-group" id="complexityBtnGroup">
                <button class="complexity-btn" data-complexity="triads">Triads</button>
                <button class="complexity-btn active" data-complexity="7ths">7ths</button>
                <button class="complexity-btn" data-complexity="9ths">9ths</button>
                <button class="complexity-btn" data-complexity="sus">Sus/Add</button>
              </div>

              <div class="builder-select-group">
                <span class="builder-label">Presets:</span>
                <select id="builderPresetSelect" class="builder-select">
                  ${SONGWRITING_PRESETS.map((p, i) => `<option value="${i}">${p.name}</option>`).join('')}
                </select>
              </div>

              <button id="toggleSpiceBtn" class="builder-spice-btn" title="Toggle Borrowed Chords & Secondary Dominants">
                <span>🌶️ Borrowed Chords ▼</span>
              </button>
            </div>
          </div>

          <!-- Diatonic Roman Numeral Palette Header -->
          <div style="display:flex; align-items:center; justify-content:flex-start; margin-bottom:6px;">
            <span style="font-size:10px; color:#FEF08A; font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">
              Diatonic Chord Bank <span style="color:#9CA3AF; font-size:9.5px; font-weight:normal;">(Drag & Drop chords into timeline below, or press 1–7 to audition)</span>
            </span>
          </div>
          <div id="diatonicPalette" class="diatonic-palette-grid"></div>

          <!-- Borrowed Chords (Spice / Modal Interchange) Drawer -->
          <div id="spiceDrawer" class="spice-drawer">
            <div style="font-size:9.5px; color:#fb923c; font-weight:700; margin-bottom:4px; text-transform:uppercase;">
              🌶️ Non-Diatonic Borrowed Chords & Secondary Dominants (Drag into timeline):
            </div>
            <div id="spiceGrid" class="spice-grid"></div>
          </div>

          <!-- DAW Timeline with Measure/Beat Ruler & Sliders -->
          <div class="timeline-container">
            <div class="timeline-header-bar">
              <div class="timeline-title">
                <span>🎼 Progression Timeline</span>
              </div>
              <div class="timeline-header-actions">
                <div class="phrase-toggle-group">
                  <button class="phrase-toggle-btn active" data-bars="4">4 Bars</button>
                  <button class="phrase-toggle-btn" data-bars="8">8 Bars</button>
                </div>
              </div>
            </div>

            <!-- The DAW Ruler & Track Container -->
            <div class="daw-timeline-wrapper" id="dawTimelineWrapper">
              <!-- Measure/Beat Ruler -->
              <div class="daw-ruler" id="dawRuler"></div>

              <!-- Chord Clips Track -->
              <div class="daw-track" id="dawTrack"></div>

              <!-- Moving Playhead Red Line -->
              <div class="daw-playhead-line" id="dawPlayheadLine"></div>

              <!-- Drag Insertion Indicator Line with Arrow Heads -->
              <div class="daw-insertion-line" id="dawInsertionLine"></div>
            </div>

            <!-- Transport & Tools Row (Playback Controls & Actions) -->
            <div class="timeline-transport-row" style="display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
              <div class="transport-left" style="display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
                <button id="playProgressionBtn" class="play-prog-btn">▶ Play Progression</button>
                <button id="toggleLoopBtn" class="transport-toggle-btn loop-btn active" title="Toggle loop mode">🔁 Loop: ON</button>
                
                <div class="bpm-slider-group">
                  <span style="font-size:9px; color:#9CA3AF; font-weight:700;">TEMPO:</span>
                  <input type="range" id="bpmSlider" class="bpm-slider" min="40" max="200" value="96">
                  <span id="bpmDisplay" class="bpm-val-text" title="Double-click to set tempo manually" style="cursor:pointer;">96 BPM</span>
                </div>

                <div class="style-btn-group">
                  <button class="style-btn active" data-style="block" title="Block Chords">Block</button>
                  <button class="style-btn" data-style="strum" title="Realistic Guitar/EP Strum">Strum</button>
                  <button class="style-btn" data-style="arp" title="Rhythmic Arpeggiator">Arp</button>
                </div>

                <button id="toggleMetronomeBtn" class="transport-toggle-btn" title="Toggle Metronome Click">⏱️ Click</button>

                <button id="exportMidiBtn" class="midi-export-btn" title="Download Standard Multi-Track MIDI File">
                  <span>💾 Export MIDI (.mid)</span>
                </button>
                <button id="clearTimelineBtn" class="clear-btn" title="Clear Timeline">🗑 Clear</button>
                <button id="toggleTextDrawerBtn" class="text-toggle-btn" title="Import, export or edit progression as text">📝 Text / Paste</button>
              </div>
            </div>

            <!-- Collapsible Plain Text Drawer (for manual pasting/editing) -->
            <div id="textDrawer" class="text-drawer">
              <input type="text" id="manualChordText" placeholder="Paste chords separated by commas or hyphens (e.g. C, G, Am, F)...">
              <button id="applyTextBtn">Apply to Timeline</button>
            </div>
          </div>
        </div>

        <!-- Hidden input for backward compatibility -->
        <input type="hidden" id="chordProgInput" value="Cmaj7, Am7, Dm7, G7">

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
    const toggleAcoustic = modalBody.querySelector('#toggleAcousticBtn');
    const toggleRhodes = modalBody.querySelector('#toggleRhodesBtn');

    if (toggleAcoustic) {
      toggleAcoustic.addEventListener('click', () => {
        currentSoundType = 'acoustic';
        audio.setSoundType('acoustic');
        toggleAcoustic.classList.add('active');
        if (toggleRhodes) toggleRhodes.classList.remove('active');
      });
    }

    if (toggleRhodes) {
      toggleRhodes.addEventListener('click', () => {
        currentSoundType = 'rhodes';
        audio.setSoundType('rhodes');
        toggleRhodes.classList.add('active');
        if (toggleAcoustic) toggleAcoustic.classList.remove('active');
      });
    }

    // 2-Octave Master Piano Interactions
    const masterPiano = modalBody.querySelector('#masterPiano');
    const activeHeldNotes = new Set();

    const stopAllHeldKeys = () => {
      activeHeldNotes.forEach(midi => {
        audio.stopNote(midi, 0.08);
        const el = masterPiano.querySelector(`[data-midi="${midi}"]`);
        if (el) el.classList.remove('active-key');
      });
      activeHeldNotes.clear();
    };

    if (masterPiano) {
      masterPiano.querySelectorAll('[data-midi]').forEach(keyEl => {
        const midi = parseInt(keyEl.getAttribute('data-midi'), 10);
        let keyTimer = null;
        const onDown = (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          keyEl.classList.add('active-key');
          activeHeldNotes.add(midi);
          audio.startNote(midi, 0.85);
          if (keyTimer) clearTimeout(keyTimer);
          keyTimer = setTimeout(() => {
            onUp();
          }, 3200);
        };
        const onUp = (e) => {
          if (keyTimer) {
            clearTimeout(keyTimer);
            keyTimer = null;
          }
          if (activeHeldNotes.has(midi)) {
            keyEl.classList.remove('active-key');
            activeHeldNotes.delete(midi);
            audio.stopNote(midi, 0.08);
          }
        };

        keyEl.addEventListener('pointerdown', onDown);
        keyEl.addEventListener('pointerup', onUp);
        keyEl.addEventListener('pointercancel', onUp);
        keyEl.addEventListener('pointerleave', onUp);
        keyEl.addEventListener('mousedown', onDown);
        keyEl.addEventListener('mouseup', onUp);
        keyEl.addEventListener('mouseleave', onUp);
        keyEl.addEventListener('touchstart', onDown, { passive: false });
        keyEl.addEventListener('touchend', onUp);
        keyEl.addEventListener('touchcancel', onUp);
      });
    }

    // Comprehensive release listeners across all possible pointer interaction boundaries
    const releaseAllHeldNotes = () => {
      if (activeHeldNotes.size > 0) stopAllHeldKeys();
    };
    ['pointerup', 'pointercancel', 'mouseup', 'touchend', 'touchcancel'].forEach(evt => {
      window.addEventListener(evt, releaseAllHeldNotes);
      doc.addEventListener(evt, releaseAllHeldNotes);
      modal.addEventListener(evt, releaseAllHeldNotes);
      if (pipWindow && pipWindow !== window) {
        pipWindow.addEventListener(evt, releaseAllHeldNotes);
        if (pipWindow.document) pipWindow.document.addEventListener(evt, releaseAllHeldNotes);
      }
    });
    window.addEventListener('blur', releaseAllHeldNotes);
    if (masterPiano) {
      masterPiano.addEventListener('pointerleave', releaseAllHeldNotes);
      masterPiano.addEventListener('mouseleave', releaseAllHeldNotes);
    }

    // Setup Web MIDI
    setupWebMidi(
      (midiNote, velocity) => {
        if (!isModalActive) return;
        audio.startNote(midiNote, velocity ? velocity / 127 : 0.8);
        const el = masterPiano ? masterPiano.querySelector(`[data-midi="${midiNote}"]`) : null;
        if (el) el.classList.add('active-key');
      },
      (midiNote) => {
        if (!isModalActive) return;
        audio.stopNote(midiNote, 0.08);
        const el = masterPiano ? masterPiano.querySelector(`[data-midi="${midiNote}"]`) : null;
        if (el) el.classList.remove('active-key');
      }
    );

    // Instrument Checkbox Listeners
    ['checkPiano', 'checkGuitar', 'checkUkulele', 'checkBass'].forEach(id => {
      const el = modalBody.querySelector('#' + id);
      if (el) {
        el.addEventListener('change', (e) => {
          const key = id.replace('check', '').toLowerCase();
          selectedInstruments[key] = e.target.checked;
          renderChordsGrid();
        });
      }
    });

    // Audition Single Chord
    function auditionChord(chordSymbol) {
      const parsed = parseChord(chordSymbol, currentTonic);
      if (!parsed) return;
      highlightKeys(parsed.tones);
      audio.playProgressionStep(
        parsed,
        1.1,
        playbackStyle,
        0,
        currentSoundType,
        selectedInstruments.bass
      );
    }

    // Diatonic Palette & Spice Renderer (With Drag & Drop)
    const diatonicPalette = modalBody.querySelector('#diatonicPalette');
    const spiceGrid = modalBody.querySelector('#spiceGrid');
    const spiceDrawer = modalBody.querySelector('#spiceDrawer');
    const toggleSpiceBtn = modalBody.querySelector('#toggleSpiceBtn');

    function renderDiatonicPalette() {
      const chords = getDiatonicChords(currentTonic, currentScale, currentComplexity);
      if (!diatonicPalette) return;

      diatonicPalette.innerHTML = chords.map((c, i) => `
        <div class="diatonic-card deg-card-${(i % 7) + 1}" draggable="true" data-chord="${c.chordSymbol}" data-degree="${c.degree}" data-idx="${i}" title="Drag into timeline or click to audition ${c.chordSymbol} (Key: ${c.shortcut})">
          <span class="diatonic-key-badge">${c.shortcut}</span>
          <div class="diatonic-degree">${c.degree}</div>
          <div class="diatonic-chord-name">${c.chordSymbol}</div>
          <div class="diatonic-func-tag">${c.func}</div>
        </div>
      `).join('');

      // Attach Card Drag & Audition Listeners
      diatonicPalette.querySelectorAll('.diatonic-card').forEach(card => {
        const chordSym = card.getAttribute('data-chord');
        const degree = card.getAttribute('data-degree');
        const degIdx = parseInt(card.getAttribute('data-idx'), 10);

        // Drag start
        card.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', JSON.stringify({
            chordSymbol: chordSym,
            degree: degree,
            degreeIdx: degIdx
          }));
        });

        // Click to audition
        card.addEventListener('click', () => {
          audio.ensureContext();
          auditionChord(chordSym);
          card.classList.add('auditioning');
          setTimeout(() => card.classList.remove('auditioning'), 200);
        });

        // Double click to append to timeline
        card.addEventListener('dblclick', () => {
          audio.ensureContext();
          addChordToTimeline(chordSym, degree, degIdx);
        });
      });

      // Render Spice Chords
      if (spiceGrid) {
        const spiceChords = getSpiceChords(currentTonic, currentScale);
        spiceGrid.innerHTML = spiceChords.map(s => {
          const degCardClass = (typeof s.degreeIdx === 'number') ? `deg-card-${(s.degreeIdx % 7) + 1}` : '';
          return `
            <div class="spice-card ${degCardClass}" draggable="true" data-chord="${s.chordSymbol}" data-degree="${s.degree}" data-idx="${s.degreeIdx ?? ''}" title="Drag into timeline or click to audition">
              <div class="spice-degree">${s.degree}</div>
              <div class="spice-chord">${s.chordSymbol}</div>
              <div class="spice-desc">${s.desc}</div>
            </div>
          `;
        }).join('');

        spiceGrid.querySelectorAll('.spice-card').forEach(sc => {
          const chordSym = sc.getAttribute('data-chord');
          const degree = sc.getAttribute('data-degree');
          const rawIdx = sc.getAttribute('data-idx');
          const degIdx = rawIdx !== '' && !isNaN(parseInt(rawIdx, 10)) ? parseInt(rawIdx, 10) : getDegreeIdxFromSymbol(degree);

          sc.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
              chordSymbol: chordSym,
              degree: degree,
              degreeIdx: degIdx
            }));
          });

          sc.addEventListener('click', () => {
            audio.ensureContext();
            auditionChord(chordSym);
            sc.classList.add('auditioning');
            setTimeout(() => sc.classList.remove('auditioning'), 200);
          });

          sc.addEventListener('dblclick', () => {
            audio.ensureContext();
            addChordToTimeline(chordSym, degree, degIdx);
          });
        });
      }
    }

    // Toggle Spice Drawer
    if (toggleSpiceBtn) {
      toggleSpiceBtn.addEventListener('click', () => {
        if (!spiceDrawer) return;
        const isOpen = spiceDrawer.classList.toggle('open');
        toggleSpiceBtn.classList.toggle('active', isOpen);
        toggleSpiceBtn.innerHTML = isOpen ? `<span>🌶️ Borrowed Chords ▲</span>` : `<span>🌶️ Borrowed Chords ▼</span>`;
      });
    }

    // Key & Scale Dropdowns
    const keySelect = modalBody.querySelector('#builderKeySelect');
    const scaleSelect = modalBody.querySelector('#builderScaleSelect');
    const presetSelect = modalBody.querySelector('#builderPresetSelect');

    // Key & Scale Dropdowns Handler
    const handleKeyChange = (newTonic) => {
      if (!newTonic) return;
      const oldTonic = currentTonic;
      currentTonic = newTonic;
      activeProgressionKey = newTonic;

      // 1. Immediately stop progression and kill any sounding audio/clusters from previous key
      stopProgression();
      try { audio.stopAllVoices(); } catch(err) {}
      highlightKeys([]);

      // 2. Transpose chords on timeline to match the new key
      const oldTonicNorm = ENHARMONIC_MAP[oldTonic.toUpperCase()] || oldTonic;
      const newTonicNorm = ENHARMONIC_MAP[newTonic.toUpperCase()] || newTonic;
      const oldIdx = CHROMATIC_NOTES.indexOf(oldTonicNorm);
      const newIdx = CHROMATIC_NOTES.indexOf(newTonicNorm);
      const semitonesDelta = (newIdx - oldIdx + 12) % 12;

      const newDiatonicList = getDiatonicChords(newTonic, currentScale, currentComplexity);

      timelineChords = timelineChords.map(c => {
        // If chord is a borrowed bVI, bVII, or bIII chord, preserve degree and recompute root in new key
        if (c.degree === 'bVI') {
          return {
            ...c,
            chordSymbol: getFlatDegreeRoot(newTonic, 6),
            color: getDegreeColor(5, 'bVI')
          };
        }
        if (c.degree === 'bVII') {
          return {
            ...c,
            chordSymbol: getFlatDegreeRoot(newTonic, 7),
            color: getDegreeColor(6, 'bVII')
          };
        }
        if (c.degree === 'bIII') {
          return {
            ...c,
            chordSymbol: getFlatDegreeRoot(newTonic, 3),
            color: getDegreeColor(2, 'bIII')
          };
        }

        // If chord was created from a scale degree index, update to corresponding diatonic chord in new key
        if (typeof c.degreeIdx === 'number' && newDiatonicList[c.degreeIdx]) {
          const mapped = newDiatonicList[c.degreeIdx];
          const parsedOld = parseChord(c.chordSymbol, oldTonic);
          const qual = parsedOld ? c.chordSymbol.slice(parsedOld.root.length) : mapped.qual;
          return {
            ...c,
            chordSymbol: mapped.root + (qual || mapped.qual),
            degree: mapped.degree,
            color: getDegreeColor(c.degreeIdx, mapped.degree)
          };
        }

        // Otherwise transpose root by semitonesDelta
        const parsed = parseChord(c.chordSymbol, oldTonic);
        if (parsed) {
          const parsedRootNorm = ENHARMONIC_MAP[parsed.root.toUpperCase()] || parsed.root;
          const rootIdx = CHROMATIC_NOTES.indexOf(parsedRootNorm);
          if (rootIdx !== -1) {
            const newRootIdx = (rootIdx + semitonesDelta) % 12;
            const isFlatKey = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'BB', 'EB', 'AB', 'DB', 'GB'].includes(newTonic) || newTonic.includes('b');
            const newRootName = isFlatKey ? CHROMATIC_NOTES_FLAT[newRootIdx] : CHROMATIC_NOTES[newRootIdx];
            const qual = c.chordSymbol.slice(parsed.root.length);
            const degIdx = (typeof c.degreeIdx === 'number') ? c.degreeIdx : getDegreeIdxFromSymbol(c.degree);
            return {
              ...c,
              chordSymbol: newRootName + qual,
              color: getDegreeColor(degIdx, c.degree)
            };
          }
        }
        return c;
      });

      // Reset voicing & position indices so diagrams update cleanly to primary shapes
      for (const k in guitarVoicingIndices) delete guitarVoicingIndices[k];
      for (const k in bassPositionIndices) delete bassPositionIndices[k];

      try { renderDiatonicPalette(); } catch(e) { console.warn('renderDiatonicPalette error:', e); }
      try { renderTimeline(); } catch(e) { console.warn('renderTimeline error:', e); }
      try { renderChordsGrid(); } catch(e) { console.warn('renderChordsGrid error:', e); }
    };

    if (keySelect) {
      keySelect.value = currentTonic;
      activeProgressionKey = currentTonic;
      ['change', 'input'].forEach(evt => {
        keySelect.addEventListener(evt, (e) => {
          handleKeyChange(e.target.value);
        });
      });
    }

    if (scaleSelect) {
      scaleSelect.value = currentScale;
      ['change', 'input'].forEach(evt => {
        scaleSelect.addEventListener(evt, (e) => {
          currentScale = e.target.value;
          stopProgression();
          try { audio.stopAllVoices(); } catch(err) {}
          highlightKeys([]);

          const newDiatonicList = getDiatonicChords(currentTonic, currentScale, currentComplexity);
          timelineChords = timelineChords.map(c => {
            if (typeof c.degreeIdx === 'number' && newDiatonicList[c.degreeIdx]) {
              const mapped = newDiatonicList[c.degreeIdx];
              return {
                ...c,
                chordSymbol: mapped.chordSymbol,
                degree: mapped.degree
              };
            }
            return c;
          });

          for (const k in guitarVoicingIndices) delete guitarVoicingIndices[k];
          for (const k in bassPositionIndices) delete bassPositionIndices[k];

          try { renderDiatonicPalette(); } catch(e) { console.warn('renderDiatonicPalette error:', e); }
          try { renderTimeline(); } catch(e) { console.warn('renderTimeline error:', e); }
          try { renderChordsGrid(); } catch(e) { console.warn('renderChordsGrid error:', e); }
        });
      });
    }

    // Complexity Button Group (Triads, 7ths, 9ths, Sus/Add)
    modalBody.querySelectorAll('.complexity-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        audio.ensureContext();
        modalBody.querySelectorAll('.complexity-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentComplexity = btn.getAttribute('data-complexity');

        // Only update palette bank - DO NOT modify existing chords on timeline!
        renderDiatonicPalette();
      });
    });

    // Presets Dropdown
    if (presetSelect) {
      presetSelect.addEventListener('change', (e) => {
        const idx = parseInt(e.target.value, 10);
        const preset = SONGWRITING_PRESETS[idx];
        if (!preset || (!preset.degrees && !preset.customChords) || (preset.degrees && preset.degrees.length === 0 && !preset.customChords)) return;

        // Switch the scale to the one needed for proper implementation of the preset (most are 'major')
        const targetScale = preset.scaleOverride || 'major';
        currentScale = targetScale;
        if (scaleSelect) {
          scaleSelect.value = currentScale;
        }

        if (preset.complexity) {
          currentComplexity = preset.complexity;
          modalBody.querySelectorAll('.complexity-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-complexity') === preset.complexity);
          });
        }

        renderDiatonicPalette();
        const diatonicList = getDiatonicChords(currentTonic, currentScale, currentComplexity);

        if (preset.customChords) {
          timelineChords = preset.customChords.map((chordToken, i) => {
            const resolved = resolveChordOrDegree(chordToken, currentTonic, currentScale, currentComplexity);
            return {
              id: Date.now() + i,
              chordSymbol: resolved.chordSymbol,
              degree: resolved.degree,
              degreeIdx: resolved.degreeIdx,
              duration: (preset.durations && preset.durations[i]) || 4,
              inversion: 0,
              color: getDegreeColor(resolved.degreeIdx, resolved.degree)
            };
          });
        } else {
          timelineChords = preset.degrees.map((degIdx, i) => {
            const chord = diatonicList[degIdx % diatonicList.length];
            return {
              id: Date.now() + i,
              chordSymbol: chord.chordSymbol,
              degree: chord.degree,
              degreeIdx: degIdx % diatonicList.length,
              duration: (preset.durations && preset.durations[i]) || 4,
              inversion: 0,
              color: getDegreeColor(degIdx % diatonicList.length, chord.degree)
            };
          });
        }

        renderTimeline();
        renderChordsGrid();
      });
    }

    // DAW Timeline & Ruler Management
    const dawRuler = modalBody.querySelector('#dawRuler');
    const dawTrack = modalBody.querySelector('#dawTrack');
    const dawTimelineWrapper = modalBody.querySelector('#dawTimelineWrapper');
    const manualChordText = modalBody.querySelector('#manualChordText');
    const hiddenChordInput = modalBody.querySelector('#chordProgInput');

    // Phrase Length Toggle (4 Bars ⇄ 8 Bars) with guaranteed visual active highlight
    const setPhraseBars = (bars) => {
      currentPhraseBars = bars;
      modalBody.querySelectorAll('.phrase-toggle-btn').forEach(b => {
        const isSelected = (parseInt(b.getAttribute('data-bars'), 10) === bars);
        b.classList.toggle('active', isSelected);
        if (isSelected) {
          b.style.setProperty('background', '#EAB308', 'important');
          b.style.setProperty('color', '#133629', 'important');
          b.style.setProperty('font-weight', '800', 'important');
          b.style.setProperty('box-shadow', 'inset 0 1px 3px rgba(0,0,0,0.3)', 'important');
        } else {
          b.style.setProperty('background', '#14382B', 'important');
          b.style.setProperty('color', '#FEF08A', 'important');
          b.style.setProperty('font-weight', '600', 'important');
          b.style.setProperty('box-shadow', 'none', 'important');
        }
      });
      if (bars === 8 && timelineChords.length > 0 && timelineChords.length <= 4) {
        const copies = timelineChords.map((c, i) => ({
          ...c,
          id: Date.now() + 100 + i,
          color: getDegreeColor(c.degreeIdx, c.degree)
        }));
        timelineChords = [...timelineChords, ...copies];
      } else if (bars === 4 && timelineChords.length > 4) {
        timelineChords = timelineChords.slice(0, 4);
      }
      renderTimeline();
      if (typeof renderChordsGrid === 'function') renderChordsGrid();
    };

    modalBody.querySelectorAll('.phrase-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bars = parseInt(btn.getAttribute('data-bars'), 10);
        if (bars) setPhraseBars(bars);
      });
    });

    function addChordToTimeline(chordSymbol, degree = '', degreeIdx = null) {
      const resolvedIdx = (typeof degreeIdx === 'number') ? degreeIdx : getDegreeIdxFromSymbol(degree);
      const totalBeats = currentPhraseBars * 4;
      const currentUsedBeats = timelineChords.reduce((acc, c) => acc + (c.duration || 4), 0);
      const remainingEmptyBeats = Math.max(0, totalBeats - currentUsedBeats);
      const dur = (remainingEmptyBeats > 0 && remainingEmptyBeats < 4) ? remainingEmptyBeats : 4;
      timelineChords.push({
        id: Date.now() + Math.random(),
        chordSymbol: chordSymbol,
        degree: degree || '',
        degreeIdx: resolvedIdx,
        duration: dur,
        inversion: 0,
        color: getDegreeColor(resolvedIdx, degree)
      });
      renderTimeline();
      renderChordsGrid();
    }

    // Render DAW Ruler (Measure numbers on top yellow row, beats on bottom row across full width)
    function renderDawRuler() {
      if (!dawRuler) return;
      let measuresHtml = '';
      let beatsHtml = '';
      const barPct = (100 / currentPhraseBars).toFixed(4);
      const totalBeats = currentPhraseBars * 4;
      const beatPct = (100 / totalBeats).toFixed(4);

      for (let m = 1; m <= currentPhraseBars; m++) {
        measuresHtml += `<div class="daw-ruler-measure-header" style="flex: 1 1 0%; width: ${barPct}%; min-width: 0; box-sizing: border-box;">Bar ${m}</div>`;
        for (let b = 1; b <= 4; b++) {
          const isEnd = (b === 4);
          beatsHtml += `<div class="daw-ruler-beat ${isEnd ? 'measure-end' : ''}" style="flex: 1 1 0%; width: ${beatPct}%; min-width: 0; box-sizing: border-box;">${b}</div>`;
        }
      }
      dawRuler.innerHTML = `
        <div class="daw-ruler-measures-row" style="display: flex; flex-direction: row; width: 100%; height: 22px; box-sizing: border-box;">${measuresHtml}</div>
        <div class="daw-ruler-beats-row" style="display: flex; flex-direction: row; width: 100%; height: 18px; box-sizing: border-box;">${beatsHtml}</div>
      `;
    }

    // Render DAW Chord Track (With Drag-Resize Slider Handles || and Drag-Drop Reordering)
    function renderTimeline() {
      renderDawRuler();

      if (!dawTrack) return;

      const totalBeats = currentPhraseBars * 4;
      const currentBeats = timelineChords.reduce((acc, c) => acc + (c.duration || 4), 0);
      const measuresCount = (currentBeats / 4).toFixed(1).replace('.0', '');

      const chordString = timelineChords.map(c => c.chordSymbol).join(' - ');
      if (hiddenChordInput) hiddenChordInput.value = chordString;
      if (manualChordText) manualChordText.value = chordString;

      if (timelineChords.length === 0) {
        dawTrack.innerHTML = `
          <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#9CA3AF; font-size:12px; font-family:'Cabin',sans-serif; border:1px dashed #285E4A; border-radius:4px;">
            Drag & Drop chords from bank above into this timeline (or double-click to add)!
          </div>
        `;
        return;
      }

      // Render each chord block with width proportional to duration in beats
      dawTrack.innerHTML = timelineChords.map((chord, idx) => {
        const widthPercent = ((chord.duration || 4) / totalBeats) * 100;
        const invLabels = ['Root', '1st', '2nd'];
        const invLabel = invLabels[chord.inversion || 0] || 'Root';
        const colorClass = chord.color || getDegreeColor(chord.degreeIdx, chord.degree);
        const durationText = `${chord.duration || 4} Beat${(chord.duration || 4) === 1 ? '' : 's'}`;

        return `
          <div class="daw-chord-clip ${colorClass} ${activeTimelineStepIdx === idx ? 'active-playhead' : ''}" 
               draggable="true"
               style="width: ${widthPercent.toFixed(2)}%; position: relative;"
               data-step-idx="${idx}"
               title="Click to audition. Drag right handle (||) to resize length (${durationText}). Drag clip to reorder.">
            
            <!-- Top-Left Corner: Dedicated Delete Button (Never blocks resize handle) -->
            <button class="daw-clip-del-btn" data-del-idx="${idx}" draggable="false" title="Delete chord">✕</button>

            <!-- Top line: Roman numeral label on left; Inversion badge on right -->
            <div class="daw-clip-header">
              <span class="daw-degree-label">${chord.degree || ''}</span>
              <button class="daw-inv-badge" data-inv-idx="${idx}" draggable="false" title="Click to cycle Inversion (Root, 1st, 2nd)">${invLabel}</button>
            </div>

            <!-- Main line: Big bold chord symbol on its own line -->
            <div class="daw-clip-body">
              <span class="daw-chord-name">${chord.chordSymbol}</span>
            </div>

            <!-- Drag & Drop Slider Resize Handle on BOTTOM RIGHT edge (Separated from delete button) -->
            <div class="daw-resize-handle" data-handle-idx="${idx}" draggable="false" title="Drag slider handle left/right to resize chord length in beats">||</div>
          </div>
        `;
      }).join('');

      // Active Drop Target State and Insertion Line Indicator
      let activeDropTarget = null;
      const dawInsertionLine = modalBody.querySelector('#dawInsertionLine');

      const clearDragVisuals = () => {
        if (dawInsertionLine) dawInsertionLine.style.display = 'none';
        if (dawTrack) {
          dawTrack.querySelectorAll('.daw-chord-clip').forEach(c => c.classList.remove('clip-swap-hover'));
          dawTrack.classList.remove('drag-over');
        }
        activeDropTarget = null;
      };

      const updateDragVisuals = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (timelineChords.length === 0) {
          activeDropTarget = { type: 'insert', index: 0 };
          dawTrack.classList.add('drag-over');
          return;
        }

        const clips = Array.from(dawTrack.querySelectorAll('.daw-chord-clip'));
        if (clips.length === 0) return;

        const wrapperRect = dawTimelineWrapper.getBoundingClientRect();
        const mouseX = e.clientX;

        let matched = false;
        for (let i = 0; i < clips.length; i++) {
          const clipEl = clips[i];
          const rect = clipEl.getBoundingClientRect();

          if (mouseX >= rect.left && mouseX <= rect.right) {
            matched = true;
            const relX = (mouseX - rect.left) / rect.width;

            if (relX < 0.32) {
              // Left intersection: insert before clip i
              dawTrack.querySelectorAll('.daw-chord-clip').forEach(c => c.classList.remove('clip-swap-hover'));
              if (dawInsertionLine) {
                dawInsertionLine.style.left = `${rect.left - wrapperRect.left}px`;
                dawInsertionLine.style.display = 'block';
              }
              activeDropTarget = { type: 'insert', index: i };
            } else if (relX > 0.68) {
              // Right intersection: insert after clip i (boundary i + 1)
              dawTrack.querySelectorAll('.daw-chord-clip').forEach(c => c.classList.remove('clip-swap-hover'));
              if (dawInsertionLine) {
                dawInsertionLine.style.left = `${rect.right - wrapperRect.left}px`;
                dawInsertionLine.style.display = 'block';
              }
              activeDropTarget = { type: 'insert', index: i + 1 };
            } else {
              // Center of chord: SWAP / REPLACE
              if (dawInsertionLine) dawInsertionLine.style.display = 'none';
              dawTrack.querySelectorAll('.daw-chord-clip').forEach((c, cIdx) => {
                c.classList.toggle('clip-swap-hover', cIdx === i);
              });
              activeDropTarget = { type: 'swap', index: i };
            }
            break;
          }
        }

        if (!matched) {
          const firstRect = clips[0].getBoundingClientRect();
          const lastRect = clips[clips.length - 1].getBoundingClientRect();
          dawTrack.querySelectorAll('.daw-chord-clip').forEach(c => c.classList.remove('clip-swap-hover'));

          if (mouseX < firstRect.left) {
            if (dawInsertionLine) {
              dawInsertionLine.style.left = `${firstRect.left - wrapperRect.left}px`;
              dawInsertionLine.style.display = 'block';
            }
            activeDropTarget = { type: 'insert', index: 0 };
          } else {
            if (dawInsertionLine) {
              dawInsertionLine.style.left = `${lastRect.right - wrapperRect.left}px`;
              dawInsertionLine.style.display = 'block';
            }
            activeDropTarget = { type: 'insert', index: timelineChords.length };
          }
        }
      };

      let isTimelineDropping = false;
      const handleTimelineDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (isTimelineDropping) return;
        isTimelineDropping = true;
        setTimeout(() => { isTimelineDropping = false; }, 180);

        const dropTarget = activeDropTarget;
        clearDragVisuals();

        try {
          const raw = e.dataTransfer.getData('text/plain');
          if (!raw) return;
          const data = JSON.parse(raw);
          if (!data) return;

          // 1. Reordering timeline chord
          if (data.type === 'timeline-reorder') {
            const fromIdx = data.fromIdx;
            if (typeof fromIdx !== 'number' || fromIdx < 0 || fromIdx >= timelineChords.length) return;

            if (dropTarget && dropTarget.type === 'swap') {
              const targetIdx = dropTarget.index;
              if (fromIdx !== targetIdx && targetIdx >= 0 && targetIdx < timelineChords.length) {
                const temp = timelineChords[fromIdx];
                timelineChords[fromIdx] = timelineChords[targetIdx];
                timelineChords[targetIdx] = temp;
                renderTimeline();
                renderChordsGrid();
              }
              return;
            }

            // Insertion at boundary
            const insertBoundary = dropTarget ? dropTarget.index : timelineChords.length;
            if (fromIdx !== insertBoundary && fromIdx !== insertBoundary - 1) {
              const item = timelineChords.splice(fromIdx, 1)[0];
              const destIdx = fromIdx < insertBoundary ? insertBoundary - 1 : insertBoundary;
              timelineChords.splice(destIdx, 0, item);
              renderTimeline();
              renderChordsGrid();
            }
            return;
          }

          // 2. Dragged from chord bank or spice drawer
          if (data.chordSymbol) {
            const degIdx = (typeof data.degreeIdx === 'number') ? data.degreeIdx : getDegreeIdxFromSymbol(data.degree);
            const degColor = getDegreeColor(degIdx, data.degree);

            const totalBeats = currentPhraseBars * 4;
            const currentTotalBeats = timelineChords.reduce((acc, c) => acc + (c.duration || 4), 0);
            const remainingEmptyBeats = Math.max(0, totalBeats - currentTotalBeats);

            let chosenDur = 4;
            if (dropTarget && dropTarget.type === 'swap' && typeof dropTarget.index === 'number') {
              chosenDur = timelineChords[dropTarget.index] ? (timelineChords[dropTarget.index].duration || 4) : 4;
            } else if (dropTarget && dropTarget.type === 'insert' && typeof dropTarget.index === 'number') {
              const isAtEnd = dropTarget.index >= timelineChords.length;
              if (isAtEnd && remainingEmptyBeats > 0 && remainingEmptyBeats < 4) {
                chosenDur = remainingEmptyBeats;
              } else if (!isAtEnd && remainingEmptyBeats > 0 && remainingEmptyBeats < 4) {
                chosenDur = Math.max(1, remainingEmptyBeats);
              } else {
                chosenDur = 4;
              }
            } else {
              // General drop into empty area
              if (remainingEmptyBeats > 0 && remainingEmptyBeats < 4) {
                chosenDur = remainingEmptyBeats;
              } else {
                chosenDur = 4;
              }
            }

            const newChord = {
              id: Date.now() + Math.random(),
              chordSymbol: data.chordSymbol,
              degree: data.degree || '',
              degreeIdx: degIdx,
              duration: chosenDur,
              inversion: 0,
              color: degColor
            };

            if (dropTarget && dropTarget.type === 'swap' && typeof dropTarget.index === 'number') {
              timelineChords[dropTarget.index] = newChord;
            } else if (dropTarget && dropTarget.type === 'insert' && typeof dropTarget.index === 'number') {
              timelineChords.splice(dropTarget.index, 0, newChord);
            } else {
              timelineChords.push(newChord);
            }

            renderTimeline();
            renderChordsGrid();

            const parsed = parseChord(data.chordSymbol, currentTonic);
            if (parsed) {
              highlightKeys(parsed.tones);
              audio.playProgressionStep(parsed, 1.2, playbackStyle, 0, currentSoundType, selectedInstruments.bass);
            }
          }
        } catch (err) {
          console.warn('Timeline drop error:', err);
        }
      };

      // Attach Click to Audition & Drag Events on Clips
      dawTrack.querySelectorAll('.daw-chord-clip').forEach(clip => {
        const idx = parseInt(clip.getAttribute('data-step-idx'), 10);
        const item = timelineChords[idx];
        if (!item) return;

        clip.addEventListener('click', (e) => {
          if (e.target.closest('.daw-clip-del-btn') || e.target.closest('.daw-inv-badge') || e.target.closest('.daw-resize-handle')) return;
          audio.ensureContext();
          const parsed = parseChord(item.chordSymbol, currentTonic);
          if (parsed) {
            highlightKeys(parsed.tones);
            audio.playProgressionStep(parsed, 1.2, playbackStyle, item.inversion || 0, currentSoundType, selectedInstruments.bass);
          }
        });

        // Drag and drop reordering
        clip.addEventListener('dragstart', (e) => {
          if (e.target.closest('.daw-clip-del-btn') || e.target.closest('.daw-resize-handle') || e.target.closest('.daw-inv-badge')) {
            e.preventDefault();
            return;
          }
          e.stopPropagation();
          e.dataTransfer.setData('text/plain', JSON.stringify({
            type: 'timeline-reorder',
            fromIdx: idx
          }));
          clip.classList.add('clip-dragging');
        });

        clip.addEventListener('dragend', () => {
          clip.classList.remove('clip-dragging');
          clearDragVisuals();
        });

        clip.addEventListener('dragover', updateDragVisuals);
        clip.addEventListener('drop', handleTimelineDrop);
      });

      // Attach single clean property listeners to container elements (prevents duplicate listener buildup)
      if (dawTrack) {
        dawTrack.ondragover = updateDragVisuals;
        dawTrack.ondrop = handleTimelineDrop;
      }
      if (dawTimelineWrapper) {
        dawTimelineWrapper.ondragover = updateDragVisuals;
        dawTimelineWrapper.ondrop = handleTimelineDrop;
        dawTimelineWrapper.ondragleave = (e) => {
          if (!dawTimelineWrapper.contains(e.relatedTarget)) {
            clearDragVisuals();
          }
        };
      }

      // Attach Inversion Cycling (Root -> 1st -> 2nd)
      dawTrack.querySelectorAll('.daw-inv-badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
          e.stopPropagation();
          audio.ensureContext();
          const idx = parseInt(badge.getAttribute('data-inv-idx'), 10);
          if (timelineChords[idx]) {
            timelineChords[idx].inversion = ((timelineChords[idx].inversion || 0) + 1) % 3;
            renderTimeline();
            const parsed = parseChord(timelineChords[idx].chordSymbol, currentTonic);
            if (parsed) {
              audio.playProgressionStep(parsed, 1.0, playbackStyle, timelineChords[idx].inversion, currentSoundType, selectedInstruments.bass);
            }
          }
        });
      });

      // Attach Delete Clip
      dawTrack.querySelectorAll('.daw-clip-del-btn').forEach(btn => {
        btn.addEventListener('mousedown', (e) => {
          e.stopPropagation();
        });
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-del-idx'), 10);
          timelineChords.splice(idx, 1);
          renderTimeline();
          renderChordsGrid();
        });
      });

      // Attach Interactive Drag & Drop Resize Slider Handles (||)
      dawTrack.querySelectorAll('.daw-resize-handle').forEach(handle => {
        handle.addEventListener('mousedown', (e) => {
          e.preventDefault();
          e.stopPropagation();

          const idx = parseInt(handle.getAttribute('data-handle-idx'), 10);
          const targetChord = timelineChords[idx];
          if (!targetChord) return;

          const startX = e.clientX;
          const startDuration = targetChord.duration || 4;
          const trackWidth = dawTrack.clientWidth || 400;
          const totalPhraseBeats = currentPhraseBars * 4;
          const pixelsPerBeat = trackWidth / totalPhraseBeats;

          const onMouseMove = (moveEvt) => {
            const deltaX = moveEvt.clientX - startX;
            const deltaBeats = Math.round(deltaX / pixelsPerBeat);
            let newDuration = Math.max(1, Math.min(totalPhraseBeats, startDuration + deltaBeats));
            if (newDuration !== targetChord.duration) {
              targetChord.duration = newDuration;
              renderTimeline();
            }
          };

          const onMouseUp = () => {
            doc.removeEventListener('mousemove', onMouseMove);
            doc.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            if (pipWindow && pipWindow !== window) {
              pipWindow.removeEventListener('mousemove', onMouseMove);
              pipWindow.removeEventListener('mouseup', onMouseUp);
            }
            renderChordsGrid();
          };

          doc.addEventListener('mousemove', onMouseMove);
          doc.addEventListener('mouseup', onMouseUp);
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
          if (pipWindow && pipWindow !== window) {
            pipWindow.addEventListener('mousemove', onMouseMove);
            pipWindow.addEventListener('mouseup', onMouseUp);
          }
        });
      });
    }

    // Transport Bar Controls
    const playProgBtn = modalBody.querySelector('#playProgressionBtn');
    const toggleLoopBtn = modalBody.querySelector('#toggleLoopBtn');
    const bpmSlider = modalBody.querySelector('#bpmSlider');
    const bpmDisplay = modalBody.querySelector('#bpmDisplay');
    const toggleMetronomeBtn = modalBody.querySelector('#toggleMetronomeBtn');
    const exportMidiBtn = modalBody.querySelector('#exportMidiBtn');
    const clearTimelineBtn = modalBody.querySelector('#clearTimelineBtn');
    const toggleTextDrawerBtn = modalBody.querySelector('#toggleTextDrawerBtn');
    const textDrawer = modalBody.querySelector('#textDrawer');
    const applyTextBtn = modalBody.querySelector('#applyTextBtn');

    if (toggleLoopBtn) {
      toggleLoopBtn.addEventListener('click', () => {
        isLooping = !isLooping;
        toggleLoopBtn.classList.toggle('active', isLooping);
        toggleLoopBtn.textContent = isLooping ? '🔁 Loop: ON' : '➡️ Loop: OFF';
      });
    }

    if (bpmSlider && bpmDisplay) {
      bpmDisplay.style.cursor = 'pointer';
      const updateBpmTooltip = (bpm) => {
        const q = Math.round(60000 / bpm);
        const e = Math.round(q / 2);
        bpmDisplay.title = `Double-click to set tempo manually • 1/4 Note: ${q}ms, 1/8 Note: ${e}ms`;
      };
      updateBpmTooltip(currentBpm);

      bpmSlider.addEventListener('input', (e) => {
        currentBpm = parseInt(e.target.value, 10);
        bpmDisplay.textContent = `${currentBpm} BPM`;
        updateBpmTooltip(currentBpm);
      });

      bpmDisplay.addEventListener('dblclick', () => {
        const input = doc.createElement('input');
        input.type = 'number';
        input.min = '40';
        input.max = '200';
        input.value = currentBpm;
        input.style.width = '62px';
        input.style.background = '#0F2E23';
        input.style.color = '#FEF08A';
        input.style.border = '1.5px solid #EAB308';
        input.style.borderRadius = '4px';
        input.style.textAlign = 'center';
        input.style.fontSize = '10.5px';
        input.style.fontWeight = 'bold';
        input.style.padding = '2px 4px';
        input.style.fontFamily = "'Cabin', sans-serif";

        bpmDisplay.innerHTML = '';
        bpmDisplay.appendChild(input);
        input.focus();
        input.select();

        let committed = false;
        const commit = () => {
          if (committed) return;
          committed = true;
          const val = parseInt(input.value, 10);
          if (!isNaN(val) && val >= 40 && val <= 200) {
            currentBpm = val;
            bpmSlider.value = val;
          }
          bpmDisplay.textContent = `${currentBpm} BPM`;
          updateBpmTooltip(currentBpm);
        };

        input.addEventListener('blur', commit);
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') commit();
          else if (e.key === 'Escape') {
            committed = true;
            bpmDisplay.textContent = `${currentBpm} BPM`;
            updateBpmTooltip(currentBpm);
          }
        });
      });
    }

    // Playback Style Buttons
    modalBody.querySelectorAll('.style-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalBody.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        playbackStyle = btn.getAttribute('data-style');
      });
    });

    if (toggleMetronomeBtn) {
      toggleMetronomeBtn.addEventListener('click', () => {
        isMetronomeOn = !isMetronomeOn;
        toggleMetronomeBtn.classList.toggle('active', isMetronomeOn);
      });
    }

    // MIDI Export Download
    if (exportMidiBtn) {
      exportMidiBtn.addEventListener('click', () => {
        downloadMidiProgression(timelineChords, currentBpm, currentTonic, currentScale);
        const originalHtml = exportMidiBtn.innerHTML;
        exportMidiBtn.innerHTML = `<span>✓ MIDI Exported!</span>`;
        setTimeout(() => { exportMidiBtn.innerHTML = originalHtml; }, 2000);
      });
    }

    // Clear Timeline Button (Fixed & Verified)
    if (clearTimelineBtn) {
      clearTimelineBtn.addEventListener('click', (e) => {
        e.preventDefault();
        stopProgression();
        timelineChords = [];
        renderTimeline();
        renderChordsGrid();
      });
    }

    // Toggle Text Drawer
    if (toggleTextDrawerBtn && textDrawer) {
      toggleTextDrawerBtn.addEventListener('click', () => {
        const isOpen = textDrawer.classList.toggle('open');
        toggleTextDrawerBtn.textContent = isOpen ? '📝 Hide Text' : '📝 Text / Paste';
      });
    }

    // Apply Plain Text Progression
    if (applyTextBtn && manualChordText) {
      applyTextBtn.addEventListener('click', () => {
        const val = manualChordText.value.trim();
        if (!val) return;
        const tokens = val.split(/[\s,\-|]+/).filter(t => t.length > 0);
        timelineChords = tokens.map((token, i) => {
          const resolved = resolveChordOrDegree(token, currentTonic, currentScale, currentComplexity);
          return {
            id: Date.now() + i,
            chordSymbol: resolved.chordSymbol,
            degree: resolved.degree,
            degreeIdx: resolved.degreeIdx,
            duration: 4,
            inversion: 0,
            color: getDegreeColor(resolved.degreeIdx, resolved.degree)
          };
        });
        renderTimeline();
        renderChordsGrid();
      });
    }

    // Full Progression Playback Engine with Moving Playhead
    function startProgression() {
      stopProgression();
      if (!timelineChords || timelineChords.length === 0) return;

      const ctx = audio.ensureContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }

      isPlayingProgression = true;
      if (playProgBtn) {
        playProgBtn.textContent = '⏹ Stop Progression';
        playProgBtn.classList.add('active');
      }

      const playheadLine = modalBody.querySelector('#dawPlayheadLine');
      if (playheadLine) {
        playheadLine.style.display = 'block';
        playheadLine.style.left = '0%';
      }

      const totalPhraseBeats = currentPhraseBars * 4;
      const msPerBeat = (60 / currentBpm) * 1000;
      let cumulativeMs = 0;
      let cumulativeBeats = 0;

      timelineChords.forEach((item, idx) => {
        const stepBeats = item.duration || 4;
        const stepDurationMs = stepBeats * msPerBeat;
        const stepStartMs = cumulativeMs;
        const stepStartBeats = cumulativeBeats;
        cumulativeMs += stepDurationMs;
        cumulativeBeats += stepBeats;

        // Schedule chord trigger
        const timerId = setTimeout(() => {
          if (!isModalActive || !isPlayingProgression) return;

          activeTimelineStepIdx = idx;

          // Update timeline visual playhead position
          if (playheadLine) {
            const startPct = (stepStartBeats / totalPhraseBeats) * 100;
            playheadLine.style.left = `${startPct}%`;
          }

          // Highlight active chord block in track
          modalBody.querySelectorAll('.daw-chord-clip').forEach((b, bIdx) => {
            b.classList.toggle('active-playhead', bIdx === idx);
          });

          // Highlight active column in instrument diagrams
          modalBody.querySelectorAll('.chord-col').forEach(c => {
            const colIdx = parseInt(c.getAttribute('data-idx'), 10);
            c.classList.toggle('active-playhead', colIdx === idx);
          });

          const parsed = parseChord(item.chordSymbol, currentTonic);
          if (parsed) {
            highlightKeys(parsed.tones);
            audio.playProgressionStep(
              parsed,
              (stepDurationMs / 1000) * 0.95,
              playbackStyle,
              item.inversion,
              currentSoundType,
              selectedInstruments.bass
            );
          }

          // Schedule metronome clicks across beats
          if (isMetronomeOn) {
            for (let b = 0; b < stepBeats; b++) {
              setTimeout(() => {
                if (isPlayingProgression && isModalActive) {
                  audio.playMetronomeClick(b === 0);
                }
              }, b * msPerBeat);
            }
          }
        }, stepStartMs);

        progressionTimers.push(timerId);
      });

      // Loop or stop at end of entire cycle
      const endTimer = setTimeout(() => {
        if (!isPlayingProgression || !isModalActive) return;
        if (isLooping) {
          startProgression();
        } else {
          stopProgression();
        }
      }, cumulativeMs);

      progressionTimers.push(endTimer);
    }

    if (playProgBtn) {
      playProgBtn.addEventListener('click', (e) => {
        e.preventDefault();
        audio.ensureContext();
        if (isPlayingProgression) {
          stopProgression();
        } else {
          startProgression();
        }
      });
    }

    // Typing Keyboard 1-7 Audition Shortcuts & Spacebar Play/Pause
    const handleKeydown = (e) => {
      if (!isModalActive) return;
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        e.stopPropagation();
        audio.ensureContext();
        if (isPlayingProgression) {
          stopProgression();
        } else {
          startProgression();
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      const key = e.key;
      const num = parseInt(key, 10);
      if (num >= 1 && num <= 7) {
        e.preventDefault();
        const chords = getDiatonicChords(currentTonic, currentScale, currentComplexity);
        const chord = chords[num - 1];
        if (chord) {
          auditionChord(chord.chordSymbol);
          const card = modalBody.querySelector(`.diatonic-card[data-chord="${chord.chordSymbol}"]`);
          if (card) {
            card.classList.add('auditioning');
            setTimeout(() => card.classList.remove('auditioning'), 200);
          }
        }
      }
    };

    doc.addEventListener('keydown', handleKeydown);
    window.addEventListener('keydown', handleKeydown);
    if (pipWindow && pipWindow !== window) {
      pipWindow.addEventListener('keydown', handleKeydown);
    }

    // Instrument Diagrams Grid Renderer (Piano, Guitar, Ukulele, Bass)
    const chordsGrid = modalBody.querySelector('#chordsGrid');

    function renderChordsGrid() {
      if (!chordsGrid) return;

      if (timelineChords.length === 0) {
        chordsGrid.innerHTML = `<div style="text-align:center;color:#9ca3af;padding:20px;font-family:'Cabin',sans-serif;">Add chords to the progression timeline above to view instrument diagrams.</div>`;
        return;
      }

      const parsedChords = timelineChords.map(c => parseChord(c.chordSymbol, currentTonic)).filter(Boolean);

      if (parsedChords.length === 0) {
        chordsGrid.innerHTML = `<div style="text-align:center;color:#f87171;padding:20px;font-family:'Cabin',sans-serif;">Could not parse chord symbols.</div>`;
        return;
      }

      const instConfigs = [
        { key: 'piano', title: 'Piano Chords', icon: SVGS.acousticPiano, render: (ch) => renderMiniPianoSvg(ch) },
        {
          key: 'guitar',
          title: 'Guitar Chords',
          icon: SVGS.guitar,
          render: (ch, idx) => {
            const voicings = getGuitarVoicingsList(ch);
            const vIdx = (guitarVoicingIndices[idx] || 0) % voicings.length;
            const activeV = voicings[vIdx];
            const vLabel = voicings.length > 1
              ? `Voicing ${vIdx + 1}/${voicings.length} • ${activeV.desc || ''}`
              : (activeV.desc || '');
            return `${renderGuitarSvg(activeV)}
              ${vLabel ? `<div style="font-size:9px;color:#FEF08A;font-weight:700;margin-top:2px;text-align:center;">${vLabel}</div>` : ''}`;
          }
        },
        { key: 'ukulele', title: 'Ukulele Chords', icon: SVGS.ukulele, render: (ch) => renderUkuleleSvg(getUkuleleVoicing(ch)) },
        {
          key: 'bass',
          title: 'Electric Bass (Root Notes)',
          icon: SVGS.bass,
          render: (ch, idx) => {
            const rootName = ch.slashBass || ch.normRoot;
            const positions = BASS_ROOTS[rootName] || [{ str: 'E', fret: 3, text: 'Fret 3 on E string' }];
            const posIdx = bassPositionIndices[idx] || 0;
            const bassPos = positions[posIdx % positions.length];
            return `${renderBassSvg(ch, posIdx)}
              <div style="font-size:9px;color:#FEF08A;font-weight:700;margin-top:2px;text-align:center;">${bassPos.text}</div>`;
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
            <div class="chord-col ${activeTimelineStepIdx === idx ? 'active-playhead' : ''}" data-idx="${idx}" data-inst="${inst.key}" title="${inst.key === 'guitar' ? 'Click to cycle guitar voicings' : inst.key === 'bass' ? 'Click to cycle fretboard position' : 'Click to highlight on 2-octave piano'}">
              <div class="chord-col-header">
                <span class="chord-col-name">${chord.raw}</span>
                <button class="chord-col-play-btn play-single-chord-btn" data-chord-idx="${idx}" data-inst="${inst.key}" title="Play ${chord.raw}">▶</button>
              </div>
              ${inst.key === 'bass' ? '' : `<div style="font-size:9.5px;color:#d1d5db;margin-bottom:3px;font-family:'Cabin',sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;text-align:center;">${chord.tones.join(' • ')}</div>`}
              <div class="chord-col-chart">
                ${inst.render(chord, idx)}
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
              ${inst.key === 'guitar' ? `<div style="font-size:10px;color:#9CA3AF;font-style:italic;font-family:'Cabin',sans-serif;margin:0 8px;">💡 Click box to cycle voicings</div>` : ''}
              ${inst.key === 'bass' ? `<div style="font-size:10px;color:#9CA3AF;font-style:italic;font-family:'Cabin',sans-serif;margin:0 8px;">💡 Click box to cycle positions</div>` : ''}
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
            highlightKeys(ch.tones);
            if (instKey === 'bass') {
              audio.playBass(ch.slashBass || ch.normRoot, 1.2);
            } else if (instKey === 'guitar') {
              audio.playGuitarVoicing(ch, guitarVoicingIndices[idx] || 0);
            } else if (instKey === 'ukulele') {
              audio.playUkuleleVoicing(ch);
            } else {
              audio.playChord(ch.midiNotes, 1.0, selectedInstruments.bass ? (ch.slashBass || ch.normRoot) : null, currentSoundType);
            }
          }
        });
      });

      // Clicking any column highlights notes or cycles guitar voicings/bass positions
      chordsGrid.querySelectorAll('.chord-col').forEach(col => {
        col.addEventListener('click', () => {
          const idx = parseInt(col.getAttribute('data-idx'), 10);
          const instKey = col.getAttribute('data-inst');
          const ch = parsedChords[idx];
          if (ch) {
            if (instKey === 'guitar') {
              const voicings = getGuitarVoicingsList(ch);
              guitarVoicingIndices[idx] = ((guitarVoicingIndices[idx] || 0) + 1) % (voicings.length || 1);
              renderChordsGrid();
            } else if (instKey === 'bass') {
              bassPositionIndices[idx] = ((bassPositionIndices[idx] || 0) + 1) % 3;
              renderChordsGrid();
            } else {
              highlightKeys(ch.tones);
            }
          }
        });
      });
    }

    // Initial render of all components
    renderDiatonicPalette();
    setPhraseBars(currentPhraseBars);
    renderTimeline();
    renderChordsGrid();
    modal.style.display = 'flex';
  };
})(window);
