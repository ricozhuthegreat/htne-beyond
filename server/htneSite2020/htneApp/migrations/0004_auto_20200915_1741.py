# Generated by Django 3.0.7 on 2020-09-15 21:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('htneApp', '0003_auto_20200915_1740'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='grad_year',
            field=models.DateField(null=True),
        ),
    ]
