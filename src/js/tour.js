document.addEventListener('DOMContentLoaded', function() {
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      classes: 'shepherd-theme-arrows',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });

  tour.addStep({
    id: 'welcome',
    text: 'Welcome to the Healthcare Dashboard!',
    attachTo: {
      element: '.header .logo',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'sidebar',
    text: 'Use this sidebar to navigate between different sections.',
    attachTo: {
      element: '.sidebar',
      on: 'right'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'dashboard',
    text: 'This is your dashboard where you can see an overview of important information.',
    attachTo: {
      element: '.main-content',
      on: 'top'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'patients',
    text: 'Here you can manage your patients.',
    attachTo: {
      element: 'a[href="patients.html"]',
      on: 'right'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'reports',
    text: 'Here you can manage your patient reports',
    attachTo: {
      element: 'a[href="reports.html"]',
      on: 'right'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'settings',
    text: 'Here you can manage your patient reports',
    attachTo: {
      element: 'a[href="settings.html"]',
      on: 'right'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'appointments',
    text: 'Check and manage your appointments here.',
    attachTo: {
      element: 'a[href="appointments.html"]',
      on: 'right'
    },
    buttons: [
      {
        text: 'Finish',
        action: tour.complete
      }
    ]
  });

  document.querySelector('.start-tour').addEventListener('click', () => {
    tour.start();
  });
});
